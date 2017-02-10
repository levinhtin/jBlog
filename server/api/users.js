import express from 'express';
import bodyParser from 'body-parser';
import mongoOp from '../models/mongo';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};
  if (!data.email) {
    errors.email = 'This field is required!';
  }
  if (Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid!';
  }
  if (!data.password) {
    errors.password = 'This field is required!';
  }
  if (!data.passwordConfirmation) {
    errors.passwordConfirmation = 'This field is required!';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords not match!';
  }
  if (!data.timezone) {
    errors.timezone = 'This field is required!';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

router.get('/', (req,res) => {
  let response = {};
  mongoOp.find({}, (err,data) => {
  // Mongo command to fetch all data from collection.
    if (err) {
      response = {"error" : true,"message" : "Error fetching data"};
    } else {
      response = {"error" : false,"message" : data};
    }
    res.json(response);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  // console.log(Validator);
  const {errors, isValid} = validateInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
import express from 'express';

import bodyParser from 'body-parser';
import mongoOp from '../models/mongo';

let router = express.Router();

router.get('/', (req, res) => {
  console.log(req.body);
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

export default router;
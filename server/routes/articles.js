import express from 'express';

let bodyParser  =   require("body-parser");
let mongoOp     =   require("./models/mongo");
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
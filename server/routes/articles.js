import express from 'express';

import bodyParser from 'body-parser';
import Article from '../models/article';

let router = express.Router();

// middleware to use for all requests to api/articles
router.use((req, res, next) => {
  // do logging
  console.log('middleware to use for all requests to api/articles.');
  next(); // make sure we go to the next routes and don't stop here
});

// Get all Articles
router.get('/', (req, res) => {
  let response = {};
  Article.find((err, articles) => {
  // Mongo command to fetch all data from collection.
    if (err) {
      response = {error: true, message: 'Error fetching data'};
    } else {
      response = {error: false, message: '', data: articles};
    }
    res.json(response);
  });
});


// Get an article by id
router.get('/:id', (req, res) => {
  console.log(req.body);
  let response = {};
  Article.findById(req.params.id, (err, article) => {
    if (err) {
      response = {error: true, message: 'Error fetching data'};
    } else {
      response = {error: false, message: '', data: article};
    }
    res.json(response);
  });
});


// Post an article
router.post('/', (req, res) => {
  console.log('Post article: ', req.body);
  let response = {};
  let article = new Article();                  // create a new instance of the Bear model
  article.title = req.body.title;               // set the article title (comes from the request)
  article.description = req.body.description;   // set the article description (comes from the request)

  // save the bear and check for errors
  article.save(err => {
    if (err)
      response = {error: true, message: err.message, data: {}};
    else
      response = {error: false, message: 'Success', data: article};
    res.json(response);
  });
});

// Update the article with this id (accessed at PUT http://localhost:3000/api/articles/:id)
router.put('/:id', (req, res) => {
  let response = {};
  // use our article model to find the article we want
  Article.findById(req.params.id, (err, article) => {
    if (err)
      res.json({error: true, message: err.message, data: {}});

    article.title = req.body.title;  // update the articles info
    article.description = req.body.description;  // update the articles info

    // save the article
    article.save((err) => {
      if (err)
        response = {error: true, message: err.message, data: {}};
      else
        response = {error: false, message: 'Article updated', data: article};
      res.json(response);
    });
  });
});

router.delete('/:id', (req, res) => {
  let response = {};
  // use our article model to find the article we want
  Article.remove({_id: req.params.id}, (err, article) => {
    if (err)
      response = {error: true, message: err.message, data: {}};
    else
      response = {error: false, message: 'Successfully deleted', data: article};
    res.json(response);
  });
});

export default router;
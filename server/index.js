import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.conf.babel.js';

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/jblog');

import api from './api';

let app = express();
let port = process.env.PORT || 3000;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '../src'));
app.use(webpackMiddleware(compiler, {
  hot: true,
  stats: {
    colors: true
  },
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  noInfo: false
}));

app.get('/*', (req, res) => {
  // res.send('Hello World');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('Running on localhost:', port));

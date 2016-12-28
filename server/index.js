import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

import users from './routes/users';
import articles from './routes/articles';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/articles', articles);

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

app.listen(5000, () => console.log('Running on localhost:5000'));

const express = require('express');
const port = 8080;
const fs = require('fs');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config');

const mongoUrl = 'mongodb://localhost:27017/blog';

const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(webpackMiddleware(webpack(webpackConfig), {
    noInfo: false,
    quiet: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    publicPath: '/dist/',
    index: 'index.html',
    serverSideRender: false
  }
));

app.get('/', (req, res) => {
  let layout = fs.readFileSync('index.html', 'utf-8');
  res.send(layout);
});

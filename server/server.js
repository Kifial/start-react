const express = require('express');
const port = 8080;
const fs = require('fs');
const path = require('path');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('../webpack.config');
const uuid = require('uuid');

const app = express();
app.use('/dist', express.static(path.resolve(__dirname, '../', 'dist')));
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
    serverSideRender: false
  }
));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

const server = app.listen(port, () => {
  console.log('Listening on port:' + port);
});

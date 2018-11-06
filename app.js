const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const port = process.env.PORT || 3000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});

// module.exports = app;

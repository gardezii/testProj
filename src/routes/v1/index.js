/**
 * V1 index route
 */

const express = require('express');
const app     = express();

var company = require('./company');

app.use("/company", company);

module.exports = app;

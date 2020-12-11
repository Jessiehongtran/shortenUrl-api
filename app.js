const express = require('express');
const app = express();
const cors = require('cors');

const urlRoute = require('./api/urlRoute');

app.use(express.json());
app.use(cors());
app.use('/url', urlRoute)


module.exports = app;
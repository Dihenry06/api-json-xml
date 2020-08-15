require('dotenv').config();

const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.xml());
app.use(cors());

// require('./databases/connectionMongoose');
// requireDir('./models/mongoose');

app.use('/xml', require('./routes/xml.routes'));
app.use('/json', require('./routes/json.routes'));

module.exports = app;
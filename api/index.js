//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Declare routes
const Subjects = require('./routes/subjects');
const Enrolments = require('./routes/enrolments');
const Auth = require('./routes/authentication');

//Create express app
const app = express();

//Adding dependencies to the express app
app.use(bodyParser.json());
app.use(cors());

//Connection string to our MongoDB
mongoose.connect(process.env.EnvVar_MongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

//Calling our routes
app.use('/api/subjects', Subjects);
app.use('/api/enrolments', Enrolments);
app.use('/api/auth', Auth);

module.exports = app;






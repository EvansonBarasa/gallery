const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');
const app = express();

// connecting the database
const MONGODB_URI =
process.env.MONGODB_URI || config.mongoURI[app.settings.env];
mongoose.connect(
MONGODB_URI,
{ useNewUrlParser:true, useUnifiedTopology:true },
(err) => {
if (err) {
console.log(err);
} else {
console.log(`Connected to Database: ${MONGODB_URI}`);
}
}
);


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())

app.use('/', index);
app.use('/image', image);


const PORT = process.env.PORT || 5050;
app.listen(PORT,() =>{
console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports=app;
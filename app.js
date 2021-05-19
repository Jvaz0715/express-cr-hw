const express = require("express");
const logger = require("morgan");
const path = require("path");
// express brings in express; logger brings in morgan; path brings in ejs

const app = express();
// define express() as a variable app for cleaner code

//middleware or creating server
app.use(logger("dev")); //from morgan
app.use(express.json());

// to start server, create listen event
app.listen(3000, function() {
    console.log(`Server is running on PORT: ${3000}`);
});
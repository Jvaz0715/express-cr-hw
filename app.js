const express = require("express");
const logger = require("morgan");
const path = require("path");
// express brings in express; logger brings in morgan; path brings in ejs

// bring in the indexRouter.js and the todoRouter.js
const indexRouter = require("./routes/indexRouter");
const todoRouter = require("./routes/todoRouter");

const app = express();
// define express() as a variable app for cleaner code

//middleware or creating server
app.use(logger("dev")); //from morgan
app.use(express.json());


//connect indexRouter and todoRouter in App.js (index = /, todo = /api/todo)

app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

// to start server, create listen event
// app.listen(3000, function() {
//     console.log(`Server is running on PORT: ${3000}`);
// });

// 11. Add modules.export = app to the bottom of the app.js file and comment out the app.listen ***

module.exports = app;
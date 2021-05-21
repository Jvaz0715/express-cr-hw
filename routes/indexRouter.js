// lets make a router here that will be exported to be used in app.js
const express = require("express");
const router = express.Router();

//Make a GET "/" route that returns a json of a message that says 'Welcome to my App'
router.get("/", (req, res) => {
    res.json({ message: "Welcome to my App" });
});

//lastly don't forget to export router;
module.exports = router;


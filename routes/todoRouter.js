const express = require("express");
const router = express.Router();

// declare the array variable

let todos = [
    {
        id: "haf24jd",
        todo: "do laundry",
        done: "false"
    },
    {
        id: "jp2nkl2",
        todo: "wash dishes",
        done: "true"
    }
];

// 10c. Make a GET "/get-all-todos" route that responds with the array of dummy data.

router.get("/get-all-todos", (req, res) => {
    res.json({ todos });
});

// 10d. Make a GET "/get-todo-by-id" route that takes in a params and responds with the id and todo. If ID is not found respond with the message "The Todo ID you are looking for does not exists, please check ID"

router.get("/get-todo-by-id/:id", (req, res) => {
    //first declare an id variable for req.params.id
    const id = req.params.id;

    let foundTodo;

    todos.forEach( (todo) => {
        if (id === todo.id) {
           foundTodo = todo; 
        };
    });

    //handle errors first
    if (!foundTodo) {
        res.json({ message: "The Todo ID you are looking for does not exists, please check ID" });
    } else {
        // only return the id and todo NOT the boolean
        res.json({ id: foundTodo.id, todo: foundTodo.todo })
    };
});


// 10e. Make a GET "/get-todos-by-done" route that takes in a params that is either true or false. If the params is false, respond with a newDoneArray that has done === false. If the params is true, respond with a newDoneArray that done === true.




// 10f. Make a POST "/create-new-todo" route that POSTs a new todo (don't forget the id) with a done that is always false (don't need to pass in done since its always false) and responds with the whole todos array.





module.exports = router;
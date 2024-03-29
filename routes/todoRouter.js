const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

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

router.get("/get-todos-by-done/:status", (req, res) => {
    let status = req.params.status;

    let completeTodos = [];
    let incompleteTodos = [];

    todos.forEach( (todo) => {
        if (todo.done === "true"){
            completeTodos.push(todo);
        } else {
            incompleteTodos.push(todo);
        }
    });
    
    if(status === "true") {
        res.json({completedtasks: completeTodos })
    } else if(status === "false") {
        res.json({ incompleteTasks: incompleteTodos });
    } else {
        res.json({ message: "Please check for true or false only" });
    };
});

// 10f. Make a POST "/create-new-todo" route that POSTs a new todo (don't forget the id) with a done that is always false (don't need to pass in done since its always false) and responds with the whole todos array.

router.post("/create-new-todo", (req, res) => {
    let newTodo = {
        id: uuidv4(),
        todo: req.body.todo,
        done: false,
    };

    //account that to do doesn't already exist
    let done = false;

    todos.forEach((todo) => {
        if (todo.todo === newTodo.todo) {
            done = true;
        };
    });

    //if it exists message client, if not add to todos array then return
    if(done) {
        res.json({ message: "That to do already exists" });
    } else {
        todos.push(newTodo);
        res.json({ todos });
    };
})



module.exports = router;
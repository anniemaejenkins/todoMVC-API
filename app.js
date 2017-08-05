const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/tododb');

const todoController = require('./controllers/todoController.js');

const Todo = require('./models/todo');

const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

// put routes here
// list all todos
app.get('/api/todos', todoController.list);

// create a todo
app.post('/api/todos', todoController.create);

// get a specific todo item
app.get('/api/todos/:id', todoController.findTodo);

// PUT /api/todos/:id  update a todo item. Returns modified todo item
app.put('/api/todos/:id', (req, res) => {

});
// PATCH /api/todos/:id  partially update a todo item. Returns the modified todo item
app.patch('/api/todos/:id', (req, res) => {

});
// DELETE /api/todos/:id  deletes a todo item. Returns the todo item that was deleted
app.delete('/api/todos/:id', (req, res) =>{

});


// app.post('/api/todos').then(response =>{
//   console.log('response'. response);
//   // response.json().then(todos => {
//   //   console.log(todos);
//   // })
// });

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});

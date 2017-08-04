const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/tododb');

const Todo = require('./models/todo');

const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

// put routes here
app.get('/api/todos', (req, res) =>{
  Todo.find({}).then((todos) => {
    res.render('todo', {model: todos});
  });
});

app.post('/api/todos', (req, res) => {
  console.log(req.body);
});
// GET /api/todos/:id  get a specific todo item
app.get('/api/todos/:id', (req, res) => {

});
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

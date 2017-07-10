const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

// put routes here
app.get('api/todos', (req, res) =>{
  res.json(todos);
});

app.post('/api/todos', function(req, res){
  
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


const Todo = require('../models/todo');

module.exports = {
  list: function(req, res) {
    Todo.find({}).then(results => {
      // console.log('results', results);
      res.json(results);
    });
  },
  create: function(req, res) {
    let newTodo = new Todo({title: "wash car"});
    newTodo.save().then(results => {
      // console.log("todos", results);
      res.json(results);
    });
  },
    findTodo: function(req, res) {
      let id = req.params.id;
      Todo.findById(id).then(results => {
        // console.log('todo', results);
        res.json(results);
      });
  },
  updateTodo: function(req, res) {
    let id = req.params.id;
    Todo.findById(id).then(results => {
      // use results.title because each results is an object
      results.title = "pet all dogs";
      results.save();
      res.json(results);
    });
  },
  changeTodo: function(req, res) {
    let id = req.params.id;
    Todo.findById(id).then(results => {
      results.title = "pet a specific dog";
      results.save();
      res.json(results);
    });
  },
  deleteTodo: function(req, res) {
    let id = req.params.id;
    // deleteOne doesn't seem to work
    Todo.findOneAndRemove(id).then(results => {
      results.save();
      res.json(results);
    });
  }
};

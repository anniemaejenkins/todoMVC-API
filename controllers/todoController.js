
const Todo = require('../models/todo');

module.exports = {
  list: function(req, res) {
    Todo.find({}).then(results => {
      console.log('results', results);
      res.json(results);
    });
  }
};

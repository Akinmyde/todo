const express = require('express');
const db = require('../db/db');

const router = express.Router();

// get all todos
router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrived successfully',
    todos: db,
  });
});

// get a single todo
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  db.map((todos) => {
    if (todos.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'todo retrieved successfully',
        todo: todos,
      });
    }
  });
  return next();
});

module.exports = router;

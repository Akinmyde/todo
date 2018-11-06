const express = require('express');
const db = require('../db/db');

const router = express.Router();

router.post('/', (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required',
    });
  } if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required',
    });
  }
  const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  db.push(todo);
  return res.status(201).send({
    success: 'true',
    message: 'todo added successfully',
    todo,
  });
});

module.exports = router;

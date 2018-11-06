const express = require('express');
const todosRouter = require('../controller/todos');
const createTodoRouter = require('../controller/createTodo');
const deleteTodoRouter = require('../controller/deleteTodo');
const updateTodoRouter = require('../controller/updateTodo');

const router = express.Router();

router.use('/api/v1/todos', todosRouter);
router.use('/api/v1/todos', createTodoRouter);
router.use('/api/v1/todos', deleteTodoRouter);
router.use('/api/v1/todos', updateTodoRouter);

module.exports = router;

const express = require('express');
const db = require('../db/db');

const router = express.Router();

router.delete('/', (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  db.map((todo, index) => {
    if (todo.id === id) {
      db.splice(index, 1);
      return res.status(200).send({
        success: 'true',
        message: 'Todo deleted successfuly',
      });
    }
  });
  return next();
});

module.exports = router;

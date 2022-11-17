const { Router } = require('express');
const GroceryList = require('../models/GroveryList');

module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const groceryList = await GroceryList.getAll();
      if (!groceryList) next();
      res.json(groceryList);
    } catch (e) {
      next(e);
    }
  });


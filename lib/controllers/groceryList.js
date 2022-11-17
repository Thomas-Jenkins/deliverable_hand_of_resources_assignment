const { Router } = require('express');
const GroceryList = require('../models/GroveryList');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const groceryList = await GroceryList.getById(req.params.id);
      if(!groceryList) next();
      res.json(groceryList);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const groceryList = await GroceryList.insert(req.body);
      res.json(groceryList);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const groceryList = await GroceryList.updateById(req.params.id, req.body);
      res.json(groceryList);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const groceryList = await GroceryList.getAll();
      if (!groceryList) next();
      res.json(groceryList);
    } catch (e) {
      next(e);
    }
  });


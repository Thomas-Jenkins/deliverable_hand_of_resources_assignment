const { Router } = require('express');
const RandomStuff = require('../models/RandomStuff');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const randomStuff = await RandomStuff.getById(req.params.id);
      if (!randomStuff) next();
      res.json(randomStuff);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const randomStuff = await RandomStuff.getAll();
      if(!randomStuff) next();
      res.json(randomStuff);
    } catch (e) {
      next(e);
    }
  });

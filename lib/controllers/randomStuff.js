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

  .post('/', async (req, res, next) => {
    try {
      const randomStuff = await RandomStuff.insert(req.body);
      res.json(randomStuff);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const randomStuff = await RandomStuff.updateById(req.params.id, req.body);
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
  })

  .delete('/:id', async (req, res, next) => {
    try{
      const randomStuff = await RandomStuff.deleteById(req.params.id);
      if (!randomStuff) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  });

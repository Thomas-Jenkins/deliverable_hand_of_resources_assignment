const { Router } = require('express');
const ConstructionStuff = require('../models/ConstructionStuff');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const constructionStuff = await ConstructionStuff.getById(req.params.id);
      if(!constructionStuff) next();
      res.json(constructionStuff);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const constructionStuff = await ConstructionStuff.getAll();
      if (!constructionStuff) next();
      res.json(constructionStuff);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const constructionStuff = await ConstructionStuff.insert(req.body);
      res.json(constructionStuff);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const constructionStuff =  await ConstructionStuff.updateById(req.params.id, req.body);
      res.json(constructionStuff);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const constructionStuff = await ConstructionStuff.deleteById(req.params.id);
      if (!constructionStuff) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  });


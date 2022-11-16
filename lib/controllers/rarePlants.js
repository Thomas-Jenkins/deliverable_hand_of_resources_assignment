const { Router } = require('express');
const RarePlant = require('../models/RarePlant');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const rarePlant = await RarePlant.getById(req.params.id);
      if(!rarePlant) next();
      res.json(rarePlant);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const rarePlant = await RarePlant.insert(req.body);
      res.json(rarePlant);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const rarePlants = await RarePlant.getAll();
      if(!rarePlants) next(); 
      res.json(rarePlants);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const rarePlant = await RarePlant.updateById(req.params.id, req.body);
      res.json(rarePlant);
    } catch (e) {
      next(e);
    }
  }); 
  

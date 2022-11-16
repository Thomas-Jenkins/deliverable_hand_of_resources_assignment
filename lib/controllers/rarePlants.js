const { Router } = require('express');
const RarePlant = require('../models/RarePlant');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const rarePlant = await RarePlant.getById(req.params.id);
    res.json(rarePlant);
  })

  .get('/', async (req, res) => {
    const rarePlants = await RarePlant.getAll();
    res.json(rarePlants);
  });

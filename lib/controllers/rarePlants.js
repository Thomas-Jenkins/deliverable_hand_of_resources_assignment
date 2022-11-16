const { Router } = require('express');
const RarePlant = require('../models/RarePlant');

module.exports = Router()

  .get('/', async (req, res) => {
    const rarePlants = RarePlant.getAll();
    res.json(rarePlants);
  });

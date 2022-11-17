const { Router } = require('express');
const AppInfo = require('../models/AppInfo');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try{
      const appInfo = await AppInfo.getById(req.params.id);
      if(!appInfo) next();
      res.json(appInfo);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const appInfo = await AppInfo.getAll();
      if(!appInfo) next();
      res.json(appInfo);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const appInfo = await AppInfo.insert(req.body);
      res.json(appInfo);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const appInfo = await AppInfo.updateById(req.params.id, req.body);
      res.json(appInfo);
    } catch(e) {
      next(e);
    }
  });

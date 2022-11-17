const { Router } = require('express');
const AppInfo = require('../models/AppInfo');

module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const appInfo = await AppInfo.getAll();
      if(!appInfo) next();
      res.json(appInfo);
    } catch (e) {
      next(e);
    }
  });

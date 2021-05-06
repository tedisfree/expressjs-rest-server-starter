const express = require('express');
const router = express.Router();
const fs = require('fs');
const config = require('../app.json');
const path = require("path");

router.get('/', function(req, res, next) {
  let file = path.join(config.path, config.file);
  fs.access(file, err => {
    if(!err) {
      res.download(path.resolve(file));
    } else {
      res.sendStatus(404);
    }
  })
});

module.exports = router;

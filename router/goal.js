var express = require('express');
var router = express.Router();

router.get("/goal/write", function (req, res) {
    res.render("goal/write");
  });

module.exports = router;
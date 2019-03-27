var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
// const Expense = require('../../models/Expense');


router.get('/', function(req, res){
  res.render('index')
});

router.get('/api/link', catchAsync(async (req, res) => {
  const { query } = req;
  const { link } = query;

  console.log(link);
  const response = await fetch(`${link}`,
    {
      method: 'GET',
    });
  console.log(response);

  return res.send({t1:bob,t2:ken});

}));



module.exports = router;

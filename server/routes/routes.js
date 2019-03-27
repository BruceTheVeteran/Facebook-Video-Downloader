var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var Visits = require('../../models/Visits');


router.get('/', function(req, res){
  res.render('index')
});

router.get('/api/link', (req, res, next) => {
const { query } = req;
const { link } = query;

console.log(link);
return res.send({t1:bob,t2:ken});

});



module.exports = router;

var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {'title': 'Home'});
});

router.get('/registrazione', function(req, res, next){
  res.render('registrazione', {'title': 'Registrazione'});
});

router.post('/registra', function(req,res){
    var option = {
        url: "http://172.17.0.2:5984/registra",
        method: "post",
        json: true,
        body: {
            "name" : req.body.name,
            "surname" : req.body.surname,
            "email" : req.body.email,
            "password" : req.body.password
        }
    };
    request(option,function(error,response,body){
          console.log(body);
    });
});

module.exports = router;

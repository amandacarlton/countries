var express = require('express');
var router = express.Router();
db=require('./../models');



router.get('/', function(req, res, next) {
  res.redirect('/countries');
});

router.get('/countries', function(req,res,next){
db.Countries.find({}, function(err, countries){
  res.render('index', {countries:countries});
});
});

router.get('/countries/new', function(req,res,next){
  res.render('new');
});

router.post('/countries', function(req,res,next){
  db.Countries.create(
    {
      name: req.body.name,
      flag: req.body.flag,
      capital: req.body.capital,
      population: req.body.population
    },
    function(err, countries){
        if(err){
            console.log(err);
        } else {
            console.log(countries);
        }
    }
  );
  res.redirect("/countries");
});

router.get('/countries/:id', function(req,res,next){
  db.Countries.findOne({_id:req.params.id}, function(err, countries){
  console.log(countries);
  res.render('show', {info:countries});
});
});

router.get('/countries/:id/edit', function(req,res){
  db.Countries.findOne({_id:req.params.id}, function(err, countries){
  res.render('edit', {countries:countries});
});
});

router.post('/countries/:id', function(req,res,next){
  db.Countries.update({_id:req.params.id}, {name:req.body.name,
    capital:req.body.capital,
    flag:req.body.flag,
    population:req.body.population}, function(err, countries){

res.redirect('/countries');
});
});

router.post('/countries/:id/delete', function(req,res,next){
  db.Countries.remove({_id: req.params.id}, function(err, countries){
    if(err){
        console.log(err);
    } else {
        console.log(countries);
    }
  res.redirect('/countries');
});
});

module.exports = router;

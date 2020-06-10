var express = require('express');
var router = express.Router();
var csrf=require('csurf')
var passport=require('passport')
var Product=require('../models/product')
var Cart = require('../models/cart');

var csrfProtection=csrf();
router.use(csrfProtection);

/* GET home page. */

// router.get('/',function(req,res){
//   res.send('../public')
// })

router.get('/shopping-page', function(req, res, next) {
 Product.find(function(err,docs){
   var productchunks=[]
   var chunkSize=3;
   for(var i=0;i<docs.length;i+=chunkSize){
     productchunks.push(docs.slice(i,i+chunkSize))
   }
  res.render('shop/index', { title: 'Shopping Cart', products:productchunks });
 })
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/shopping-page'); //1 /-> /shopping-page
     }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/shopping-page'); //1 /-> /shopping-page
  });
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
      return res.render('shop/shopping-cart', {products: null});
  } 
   var cart = new Cart(req.session.cart);
   res.render('./shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
  res.render('./shop/checkout')
})

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('./user/signin');
}
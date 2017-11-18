var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/users");

//Root Route
router.get("/", function(req, res){
    res.render("landing");
});

//==========================
// AUTH Routes
//==========================

// Show register form
router.get("/register", function(req, res){
    res.render("register");
});

//Sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Yelp Camp, " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

// show login form
router.get("/login", function(req, res){
    res.render("login");
});

//Login Logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect:"/campgrounds",
        failureRedirect:"/login"
    }), function(req, res){
});

//Logout 
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged out!");
    res.redirect("/campgrounds");
});


module.exports = router;
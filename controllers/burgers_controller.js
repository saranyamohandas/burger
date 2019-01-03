var express = require("express");
var router = express.Router();
//import burger model to call orm constructors
var burger = require("../models/burger.js");


router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers : data
        };
        console.log(hbsObject.burgers[0].burger_name);
        
        res.render("index",hbsObject);
    })
});

module.exports = router;





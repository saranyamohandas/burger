var express = require("express");
var router = express.Router();
//import burger model to call orm constructors
var burger = require("../models/burger.js");


router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers : data
        };
        hbsObject.burgers.forEach(function(element){
            console.log(element.burger_name);
        })
        
        
        res.render("index",hbsObject);
    })
});

router.post("/api/burgers",function(req,res){
    console.log("req.body.name",req.body.name);
    burger.insertRows("burger_name",req.body.name,
                     function(result){
        res.json({id: result.insertId});
        console.log("insertid",result.insertId);
        
    })
});

router.put("/api/burgers/:id",function(req,res){
    console.log("update",req.params.id);
    var condition = "id = " + req.params.id;
   // var cols = {req.body}
    console.log(req.body)
    burger.updateRows(req.body,condition,function(result){
        if(result.changedRows == 0){
          return(result.status(404).end());  
        } else {
          res.status(200).end();
        }
    })
});


module.exports = router;





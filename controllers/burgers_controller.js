var express = require("express");
var router = express.Router();
//import burger model to call orm constructors
var burger = require("../models/burger.js");


router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers : data
        };
        res.render("index",hbsObject);
        console.log("Total records :",hbsObject.burgers.length);
        console.log("******************************");
    })
});

router.post("/api/burgers",function(req,res){

    burger.insertOne("burger_name",req.body.name,
                     function(result){
        res.json({id: result.insertId});
        console.log("Insert-id :",result.insertId);
        console.log("******************************");
        
    })
});

router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;
   
    burger.updateOne(req.body,condition,function(result){
        console.log("Updated Rows :",result.changedRows);
        console.log("******************************");
        if(result.changedRows == 0){
          return(result.status(404).end());  
        } else {
          res.status(200).end();
        }
    })
});

router.delete("/api/burgers",function(req,res){
    var condition = "id =" + req.body.id;
    
    burger.deleteOne(condition,function(result){
        if(result.affectedRows == 0){
            return(result.status(404).end()); 
        } else {
            res.status(200).end();
        }
        console.log("No. of rows deleted - ",result.affectedRows);
        console.log("******************************");
        
    })
})


module.exports = router;





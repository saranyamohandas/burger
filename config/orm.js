var connection = require("../config/connection.js");
// Object Relational Mapper (ORM)

var orm = {
    selectAll : function(table,cb){
        var querystring = "SELECT * FROM ?? ";
        console.log(querystring);
        var query =  connection.query(querystring,[table],function(err,rows){
            if(err) throw err;
            //console.log(rows);
            cb(rows);
            //return(rows)
        }
                                     )
        console.log(query.sql);
    }
//    insertOne : function(table,cols,data){
//        console.log(querystring);
//        var querystring = "INSERT INTO ??(??) VALUES (??) ";
//        connection.query(querystring,[table,cols,data],function(err,rows){
//            if(err) throw err;
//            //console.log(rows);
//        })
//    }
//    
//    
//    
};

module.exports = orm;
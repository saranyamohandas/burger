var connection = require("../config/connection.js");
// Object Relational Mapper (ORM)

// Helper function to convert obj to sql
function objToSql(obj){
    var updateSet = [];
    for(key in obj){
        var val = obj[key];
    }
    if(Object.hasOwnProperty.call(obj,key)){
       if(typeof(val) === "string" && val.indexOf(" ") >=0){
        val = "'" + val + "'";
    }
    updateSet.push(key + "=" + val);
    }
    
    return(updateSet.toString());
}


var orm = {
    selectAll : function(table,cb){
        var querystring = "SELECT * FROM ?? ";
        
        var query =  connection.query(querystring,[table],function(err,rows){
            if(err) throw err;
            cb(rows);
            
        }
                                     );
        console.log("******************************");
        console.log(query.sql);
        
    },
    insertOne : function(table,cols,data,cb){
       
        var querystring = "INSERT INTO ??(??) VALUES (?) ";
        
        var query =  connection.query(querystring,[table,cols,data],function(err,rows){
            if(err) throw err;
            //console.log(rows);
            cb(rows);
        }
                                     );
        console.log("******************************");
        console.log(query.sql);
        
        
    },
    updateOne : function(table,cols,condition,cb){
    var querystring = "UPDATE " + table;
    
    querystring += " SET ";
    querystring += objToSql(cols);
    querystring += " WHERE ";
    querystring += condition;
        var query = connection.query(querystring,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        }
                                    );
        console.log("******************************");
        console.log(query.sql); 
        
},
    deleteOne : function(table,condition,cb){
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        var query = connection.query(queryString,function(err,result){
            if(err) throw err;
            cb(result);
        })
        console.log("******************************");
        console.log(query.sql);
        
}
    
};

module.exports = orm;
var connection = require("../config/connection.js");
// Object Relational Mapper (ORM)

// Helper function to conver obj to sql
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
    console.log("set",updateSet);
    return(updateSet.toString());
}


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
    },
    insertOne : function(table,cols,data,cb){
       
        var querystring = "INSERT INTO ??(??) VALUES (?) ";
        console.log("table", table + "cols" ,cols, + "data",data );
        var query =  connection.query(querystring,[table,cols,data],function(err,rows){
            if(err) throw err;
            //console.log(rows);
            cb(rows);
        }
                                     );
        console.log(query.sql);
        
    },
    updateOne : function(table,cols,condition,cb){
    var querystring = "UPDATE " + table;
    //SET () WHERE (??)";
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
                                    )
        console.log(query.sql);
    
    
       
        //console.log("table", table + "cols" ,cols, + "data",data ); 
}
    
    
    
};

module.exports = orm;
var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
      orm.selectAll("burgers",function(res){
          cb(res);
      })
    },
    insertRows : function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(res){
            cb(res);
        });
    },
    updateRows : function(cols,condition,cb){
        orm.updateRows("burgers",cols,condition,function(res){
            cb(res);
        })
    }
    };

module.exports = burger;
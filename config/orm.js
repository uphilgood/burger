var connection = require("./connection.js");
// var connectDb = require("./connection.js")
// const connection = myConnection.connection

let ORM = {
    selectAll: function (cb) {
        connection.query('SELECT * FROM burgers', function (error, results, fields) {
            if (error) throw error;
            // results.forEach(data => {
            //     console.log(data)
            // })
            cb(results)
        })
    },
    insertOne: function(name, eaten) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUE (?, ?) ', [name, eaten], function (error, results, fields) {
            if (error) throw error;
            console.log(name + " has been added!")
        })
    }, 
    updateOne: function(eaten, name) {
        connection.query('update burgers set devoured = ? where burger_name = ? ', [eaten, name], function (error, results, fields) {
            if (error) throw error;
            console.log("You ate the " + name+  "!")
        })
    }
}

ORM.selectAll(function(res) {
    console.log(res)
})

module.exports = ORM;
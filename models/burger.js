var ORM = require("../config/orm");

let burger = {
    all: function() {
        ORM.selectAll()
    }
}

burger.all()
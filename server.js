let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
let controller = require("./controllers/burgers_controller")
var burger = require("./models/burger")

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(controller)

app.listen(PORT, function(){
    console.log("Started our server and listening");
})
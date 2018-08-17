let express = require("express");
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");
let app = express();
let controller = require("./controllers/burgers_controller")
let burger = require("./models/burger")
let PORT = process.env.PORT || 8080;

app.use(express.static("public"))

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(controller)

app.listen(PORT, function(){
    console.log("Started our server and listening");
})
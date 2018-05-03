//dependencies and boilerplate

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


//routes
// require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(port, function () {
    console.log("App listening on PORT: " + port);
});
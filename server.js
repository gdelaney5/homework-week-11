var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/public/notes", function(req, res) {
    return res.json();
});

app.get("/public/*", function(req, res) {
    return res.json();
});


//Listener
//====================================================

app.listen(PORT, function() {
    console.log("App is litening on PORT " + PORT);
});
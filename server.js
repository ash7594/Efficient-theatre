var express = require("express");
var app = express();

app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.use(express.static(__dirname + 'public/'));

var admin = require("./routes/admin");
var login = require("./routes/login");

app.get('/adminpanel', admin.panel);
app.get('/login', login.panel);

app.listen(8080);
console.log("Listening on port 8080...");

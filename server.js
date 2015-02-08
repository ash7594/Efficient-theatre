var express = require("express");
var app = express();

app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get('/', function(req,res) {
	res.render('pages/index');
});
app.get('/admin_login', function(req,res) {
	res.render('pages/admin_login');
});

app.listen(8080);
console.log("Listening on port 8080...");

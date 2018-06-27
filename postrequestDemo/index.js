var express = require("express");

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.listen(3000, function(req, res)
{
	console.log("Server starting up!");
});

var friends = ["Daniel", "Lizzy", "Jen", "John"];

app.get("/", function(req, res)
{
	res.render("home");
});

app.post("/addfriends", function(req, res)
{
	console.log(req.body.newfriend);
	var newFriend = req.body.newfriend;
	console.log(friends);
	friends.push(newFriend);
	console.log(friends);
	res.redirect("/friends");
});

app.get("/friends", function(req, res)
{
	res.render("friends", {friend: friends});
});


var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var creature = req.params.animal;
	if (creature === "pig")
	{
		res.send("The " + creature + " says OINK!!");
	}
	else if (creature === "cow")
	{
		res.send("The " + creature + " says MOOOO!");
	}
	else if (creature === "dog")
	{
		res.send("The " + creature + " says BARK!");
	}
	else
	{
		res.send("I dont know what kind of sound a " + creature + " makes. :(");
	}
});

app.get("/repeat/:greeting/:number", function(req, res){
	var greeting1 = req.params.greeting;
	var number1 = Number(req.params.number);
	var result = "";
	for (var i = 0; i < number1; i++)
	{
		result += greeting1 + " ";
	}
	res.send(result);
});

app.get("*", function(req, res){
	res.send("Sorry..... page not found :(");
});

app.listen(3000, function(){
	console.log("Server is listening!");
});
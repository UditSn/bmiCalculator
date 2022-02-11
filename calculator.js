const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
});



app.post("/",function(req,res){

var n1 = (req.body.num1);
var n2 = (req.body.num2);
var resw = Number(n1) +  Number(n2);


  res.send("result"+resw);

});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height);


  res.send("result is "+result);
});





app.listen(3000,function(){
  console.log("server is listning on port 3000");
});

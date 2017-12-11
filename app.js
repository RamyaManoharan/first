var express=require('express');
var path=require("path");
var cookieParser =require('cookie-parser');
var request=require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/',function(req,res){
	res.send("Hello World - Ramya");
});

app.get('/authors',function(req,res){
var con,don;
request({url:"https://jsonplaceholder.typicode.com/users",json:true},function(error,response,body){
        if(!error && response.statusCode==200){
	               con=JSON.parse(JSON.stringify(body))
		   }
		   });
request({
           url:"https://jsonplaceholder.typicode.com/posts",
	   json:true	
	   },function(error,response,body){
	 if(!error && response.statusCode==200){
	 don=JSON.parse(JSON.stringify(body))
                    var count;
                    res.write('Authors and their post count\r\n\r\n');
	  for(var k=0;k<=9;k++){
                 	  count=0;
                    for(var i=0;i<don.length;i++){
			  if(don[i].userId==k+1){
			  count++;}}
			  res.write(con[k].name+':'+JSON.stringify(count)+'\r\n');
			}
			res.end();
			 }
			 });
		                });


app.get('/setcookie',function(req,res){
res.cookie("Name","Ramya");
res.cookie("Age","20").send("Cookies are set");
});


app.get('/getcookies', function(req, res) {
  res.send('Cookies are Name:'+req.cookies.Name+'  Age:'+req.cookies.Age);
});


app.get('/robots.txt',function(req,res){
	res.status(403).send("Access Denied!!!");
});

app.use(express.static('public'));

app.get('/html',function(req,res)
	{
		res.sendFile(path.join(__dirname+"/about.html"));
	});


app.get('/input',function(req,res)
{
res.sendFile(path.join(__dirname+"/form.html"));
});


app.post('/input1', function(req, res){
   console.log('Received data:',req.body.data);
   res.send('Data required:'+req.body.data);
});



app.listen(8080);

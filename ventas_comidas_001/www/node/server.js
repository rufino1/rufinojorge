var IPADDRESS="127.0.0.1";
var PORT=9095
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);


app.post('/getpedir', function(req, res){	
	
    var data=req.param('data');
    data=JSON.parse(data);
    //console.log(data);
	res.json(msn);
	
});

app.post('/getregistrar', function(req, res){	
	
    var data=req.param('data');
    data=JSON.parse(data);
    //console.log(data);
	res.json(msn);
	
});

app.post('/getcontactar', function(req, res){	
	
    var data=req.param('data');
    data=JSON.parse(data);
    //console.log(data);
	res.json(msn);
	
});

app.post('/getLogin', function(req, res){	
	
    var data=req.param('data');
    data=JSON.parse(data);
    //console.log(data);
	
    if(data.usuario!=="rufino" || data.contrasenia!=="rufino"){


	var msn={};
	msn.data=null;	
	msn.status=0;
	msn.message="NO AUTENTICADO";


    }
    else{

	var user={}
    	user.id=1;
    	user.usuario='rufino';


	var msn={};
	msn.data=user;	
	msn.status=1;
	msn.message=null;
	
   }				
	    
    
	
	res.json(msn);
	
});

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
 	res.render('index');
});

app.listen(4000, ()=>{
  console.log('4000');
})

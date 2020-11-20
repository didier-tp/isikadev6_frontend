var express = require('express');
var deviseApiRoutes = require('./devise-api-routes');
var produitApiRoutes = require('./produit-api-routes');
var bodyParser = require('body-parser');
var app = express();

//support parsing of JSON post data
var jsonParser = bodyParser.json() ;
app.use(jsonParser);

//les routes en /html/... seront gérées par express par
//de simples renvois des fichiers statiques
//du répertoire "./html"
app.use('/html', express.static(__dirname+"/html"));
app.get('/', function(req , res ) {
  res.redirect('/html/index.html');
});

app.use(deviseApiRoutes.apiRouter);// delegate REST API routes
app.use(produitApiRoutes.apiRouter);// to apiRouter(s)

app.listen(8282 , function () {
  console.log("http://localhost:8282");
});
/*
 * Module dependencies
 */
 
var express = require('express');
var app     = express();
    
    
/*
 * Middleware to serve static assets
 */
    
app.use('/routes', express.static(__dirname + '/routes'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/views',  express.static(__dirname + '/views'));
   

/*
 * Jade template engine
 */

app.set('view engine', 'jade');
   
   
/*
 * Routing
 */ 
    
app.get('/', function (req, res) {
  res.render('index');
});
        
    
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
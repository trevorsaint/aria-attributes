/*
 * Module dependencies
 */
 
var express = require('express');
var app     = express();
var routes  = require(__dirname + '/routes/');
var port    = (process.env.PORT || 3000);
    
    
/*
 * Serve static assets
 */
    
app.use('/routes', express.static(__dirname + '/routes'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/views',  express.static(__dirname + '/views'));
   

/*
 * Jade template engine
 */

app.set('view engine', 'jade');
              

/*
 * Routes
 */
        
routes.bind(app, '/routes/');


/*
 * Start app
 */

app.listen(port);
console.log('Listening on port ' + port);
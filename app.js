/*
 * Module dependencies
 */

var express = require('express');
var path    = require('path');

var routes  = require('./routes/index');
var app     = express();


/*
 * Serve static assets
 */
  
app.use(express.static(path.join(__dirname, 'public')));


/*
 * Jade template engine
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/*
 * Routing
 */

app.use('/', routes);


/*
 * Catch 404 errors
 */

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/*
 * App listen
 */

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});


module.exports = app;
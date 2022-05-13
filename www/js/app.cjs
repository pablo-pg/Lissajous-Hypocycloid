const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();

// set the port
APP.set('port', 8080);

// tell express that we want to use the www folder
// for our static assets
APP.use(EXPRESS.static(PATH.join(__dirname, '..')));
APP.use(EXPRESS.static(PATH.join(__dirname, '../..')));

// Listen for requests
const SERVER = APP.listen(APP.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://10.6.129.183:' + APP.get('port'));
});

var glob = require('glob');
var config = require('./gulp/config');

var log = require('./gulp/log/log');
var error = require('./gulp/notify/error');
var success = require('./gulp/notify/success');

glob.sync('./gulp/tasks/*.js', {
    realpath: true
}).forEach(function(file) {
    require(file)(config, log, error, success);
});

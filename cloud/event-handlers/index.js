/* jshint esversion: 6 */

// iterate over the files in this directory
require('fs').readdirSync(__dirname).forEach(function(file) {
    // dont include this file
    if (file == 'index.js') return;
    // dont include non javascript files
    if (file.indexOf(".js") == -1) return;

    // string to determine the module name (file name sans .js)
    var moduleName = file.replace('.js','');
    // module to export from the file
    var module = require('./' + file);
});

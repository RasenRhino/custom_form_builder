var plugins = require('./plugins.json');
var pluginKeys = Object.keys(plugins);
console.log(pluginKeys);
console.log(pluginKeys[0].hook);
// for (var i = 0; i< pluginKeys; i++)
//     plugins[pluginKeys[i]].func = require('./'+[pluginKeys[i].hook+'.js').run;

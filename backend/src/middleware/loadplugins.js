const testFolder = '../plugins/';
const fs = require('fs');

function plugloader(){
let rawdata = fs.readFileSync(require.resolve(testFolder+'plugins.json'));
let plugfiles = JSON.parse(rawdata);
module_dict={}
let plugpath="/mnt/r/atlan/final/backend/src/plugins/"
Object.keys(plugfiles).forEach(function(k){
    module_dict[k]=require(plugpath+plugfiles[k]);
});
    return module_dict;
}
module.exports={
    plugloader
}
// console.log(student.test);
// glob.sync('/mnt/r/atlan/final/backend/src/plugins/*.js').forEach( function( file ) {
//     console.log(file);
//   });
// glob("plugins/*.js", options, function (er, files) {
//     console.log(files);
// });
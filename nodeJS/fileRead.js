console.log('start');
var fs = require('fs');
fs.readFile('data/CSS', 'utf-8', function(err, data){
    console.log('data:'+data);
});

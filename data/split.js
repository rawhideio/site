var fs = require('fs');
var cattle = require('./cattle.json');

cattle.features.forEach(function (c,i) {
	fs.writeFile("./tokens/" + i + ".json", JSON.stringify(c), function(err) {
    if(err) { return console.log(err); }
    console.log("The file was saved!");});
})
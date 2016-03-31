var fs = require('fs');

var path = './files/products.csv';

var cont = fs.readFile(path,'utf8', function(err, data){
	if (err) return (err);

	var d1 = [];
	var splitted = data.split('\n');

	// console.log("\nSplitted data : \n" + splitted + "\n");
	
	// splitted.forEach(function(item){
	// 	var out = splitted.shift();
	// 	d1.push(out);
	// })

	// var out = splitted.shift();
	d1.push(splitted);

	console.log("\nContents : \n")
	console.log(d1);
});
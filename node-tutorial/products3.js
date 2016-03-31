var fs = require('fs');

var path = './files/products.csv';

var cont = fs.readFile(path,'utf8', function(err, data){
	if (err) return (err);

	var d1 = [];
	var splitted = data.split('\n');
	d1.push(splitted);


	while(d1.length > 0){
		var newData = [];
		var item = d1.pop();
		newData.push(item);
	}

	for(var i =0; i < newData.length; i++){
		var products =[];
		var item = newData[i];
		products.push(item);

	}

	var item = String(item);

	var words = item.split(',');

	console.log(words);



	console.log("\nContents : \n")
	// console.log("The Pros" + products.length);
	// console.log(item);
	console.log(item.length);

	//This prints a list in a list.
	// console.log(newData);
});
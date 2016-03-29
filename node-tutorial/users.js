// a empty user list
var users = [];

//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });

users.push({first_name : 'Jack', last_name : 'Bradshaw'},{first_name : 'Callum', last_name : 'Bradshaw'}, {first_name : 'Neil', last_name : 'Bradshaw'});

//Printing the contents of an array
users.forEach(function(word){
	console.log("Hi, " + word.first_name, word.last_name + "!")
});

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw

//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method

//Hi, first_name last_name!

//--------------------Own Attempt(Mozzila Site Example)----------------
// function logArrayElements(element, index, array){                  |
// 	for(var i = 0; i<1; i++){  //Check This One                       |
// 		console.log( 'Hi, ' + element.first_name + ' ' + element.last_name + '!');                                                                 |
// 	}                                                                 |
// };                                                                 |
//users.forEach(logArrayElements);                                    |
//---------------------------------------------------------------------

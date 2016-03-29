var fs = require("fs");
// var files = fs.readdirSync(folderName);

//Sync
var linesInFilesFunc = function(folderName){
  var files = fs.readdirSync(folderName);
  var linesInFiles=[];
  files.forEach(function(file){
    content= fs.readFileSync(folderName + '/' + file, 'utf8');
    var lines = content.split('\n');
    lines.forEach(function(line){
      linesInFiles.push(line);
    })
  });
  console.log("Printing Syncronously!")
  return linesInFiles;
}


//Async
var linesInFilesAsync = function(folderName, callback){

  console.log("Printing Asyncronously!")
  callback(null, linesInFilesFunc(folderName));
}

module.exports.linesInFilesAsync = linesInFilesAsync;
module.exports.linesInFiles = linesInFilesFunc;

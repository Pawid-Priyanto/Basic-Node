var fs = require('fs');



fs.writeFileSync('test2.txt', 'contoh write file'); // ini contoh writeFile

var readMe = fs.readFileSync('readMe.txt', 'utf8'); // ini contoh readfile
var test2 = fs.readFileSync('test2.txt', 'utf8'); // ini contoh readfile


console.log(readMe, test2);
var fs = require("fs"); 
var dat = fs.readFileSync("./index.json");
console.log(JSON.parse(dat));
var fs = require("fs");

fs.writeFile("README.md", "utf8", function (err){
    if (err){
        console.log(err);
    }
    
});
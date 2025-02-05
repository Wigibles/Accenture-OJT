const fs = require("fs");

fs.writeFile("inbox.txt","Hello Manniger",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 


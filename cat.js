const fs = require('fs');

const cat = (file) => {
  fs.readFile(file, 'utf8', function(err, data){
    if (err) {
      throw err;
    } else {
    // Display the file content
      process.stdout.write(data);
    }
  })
}

module.exports = cat;

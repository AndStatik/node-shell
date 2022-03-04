const request = require('request');

const curl = site =>{
  request(site, function (error, response, body) {
    if (error) {
      throw error;
    } else {
      // console.log('statusCode:', response && response.statusCode);
      process.stdout.write(body);
    }
  });
}


module.exports = curl;

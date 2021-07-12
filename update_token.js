var request = require('request');

var username = "";
var password = "";
var key = "";

var options = {
  'method': 'POST',
  'url': 'https://'+username+':'+password+'@api.pptxbuilder.com/api/auth/update_token',
  'headers': {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({"key":key})
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  
  const body = JSON.parse(response.body)
  if(body.error){
    console.log(body.error)
    return;
  }
  console.log("STATUS: " +body.success);
  console.log("Token: "+ response.headers['authentication-token'])
  console.log("Token expiration: " +body['token_expires']);
});

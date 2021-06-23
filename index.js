var request = require('request');
const fs = require('fs');

var data = require('./example_data/bar.json')

var token = 'YOUR_TOKEN'

var options = {
  'method': 'POST',
  'url': 'https://staging-api-pptxbuilder.herokuapp.com/api/v1/convert',
  'headers': {
    'Authorization': 'Bearer '+token,
    'Content-Type': 'application/json'
  },
  'encoding': null,
  'body' : JSON.stringify(data)
};
request(options, function (error, response) {
  if (error) throw new Error(error);

  const buffer = Buffer.from(response.body,'utf-8');
  fs.writeFileSync('./exports/export.pptx', buffer);
});

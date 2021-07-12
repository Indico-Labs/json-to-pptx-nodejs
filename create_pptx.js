var request = require('request');
const fs = require('fs');

var data = require('./example_data/template.json')

var token = ''

var options = {
  'method': 'POST',
  'url': 'https://api.pptxbuilder.com/api/v1/convert',
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
  fs.writeFileSync('./exports/'+data['base_settings']['file_name']+'.pptx', buffer);
});

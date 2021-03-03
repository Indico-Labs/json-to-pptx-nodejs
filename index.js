var request = require('request');
var data = require('./data')

var token = ''

var options = {
  'method': 'POST',
  'url': 'https://api.pptxbuilder.com/api/v2/convert_data_to_pptx',
  'headers': {
    'Authorization': 'Bearer '+token
  },
  formData: {
    'json_data': JSON.stringify(data),
    'pptx_file' : ''
}
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

## Example of usage for API integration

### Json to PPTX Builder
- For more detailed information check out our documentation at http://docs.pptxbuilder.com

### Install the dependencies
`$ npm install`

### Get a authentication token
- Replace your credentials in `get_token.js`
- Run the script

`$ node get_token.js`

### Update a authentication token
- Replace your credentials in `update_token.js`
- Run the script

`$ node update_token.js`

### Create a pptx
- Replace your authorization jwt token in `create_pptx.js` 
- Select your data and template file:

`var data = require('./example_data/appinio.json')`

- Run the script

`$ node create_pptx.js`

- Check the exported pptx on the `/exports/`



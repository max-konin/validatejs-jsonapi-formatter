const formatter = require('./lib/formatter');

const setUpFormatter = validate => {
  validate.formatters.jsonapi = formatter
}

module.exports = {
  setUpFormatter,
}
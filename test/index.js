const { setUpFormatter } = require('../index');
const validate = require('validate.js');
const { expect } = require('chai');

describe('JSON:API Formatter', function() {
  const validation = {
    firstName: {
      presence: true
    }
  };
  setUpFormatter(validate);
  it('returns error in JSON:API format', function() {
    expect(validate({}, validation, { format: 'jsonapi' })).to.deep.eq([
      {
        title: "First name can't be blank",
        source: {
          pointer: '/data/attributes/firstName'
        }
      }
    ]);
  });
});

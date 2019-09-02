# JSON:API Formatter for validate.js

## Getting started

### Installation
```
npm install validatejs-jsonapi-formatter
```

Or

```
yarn add validatejs-jsonapi-formatter
```

### Usage

```javascript
const { setUpFormatter } = require('validatejs-jsonapi-formatter');
const validate = require('validate.js');

setUpFormatter(validate);

validate(changeset, validation, { format: 'jsonapi' }))
```


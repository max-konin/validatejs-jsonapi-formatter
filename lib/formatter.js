module.exports = errors => errors.map(error => ({
  source: {
    pointer: `/data/attributes/${error.attribute}`
  },
  title: error.error
}));
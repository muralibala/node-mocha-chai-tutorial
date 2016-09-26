var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/node-testing',
  test: 'mongodb://localhost/node-test',
  prod: 'mongodb://localhost:27017/node-prod'
};

module.exports = config;

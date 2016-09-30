var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/node-testing',
  test: 'mongodb://localhost/node-test',
  prod: 'mongodb://127.0.0.1:27017/node-prod'
};

module.exports = config;

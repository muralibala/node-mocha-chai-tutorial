var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/node-testing',
  test: 'mongodb://localhost/node-test',
  prod: 'mongodb://mongo-f7b6a7b7-1:27017/node-prod'
};

module.exports = config;

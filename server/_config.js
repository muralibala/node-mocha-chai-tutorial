var config = {};

config.mongoURI = {
  development: 'mongodb://mongo-f7b6a7b7-1:27017/node-prod',
  test: 'mongodb://localhost/node-test',
  prod: 'mongodb://localhost/node-prod'
};

module.exports = config;

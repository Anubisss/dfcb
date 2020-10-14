'use strict';

const conversationParser = require('./conversation/conversationParser');

const process = (path) => {
  console.log(`Processing messages from: ${path}`);

  conversationParser.parse(path);
};

module.exports = {
  process,
};

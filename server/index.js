'use strict';

const config = require('./src/config');
const messageProcessor = require('./src/messageProcessor');
const server = require('./src/server');

const start = () => {
  if (!config.MESSAGES_PATH) {
    console.error('Config error: environment variable MESSAGES_PATH is not set');
    console.log('Start the application like this: MESSAGES_PATH=/path/to/your/downloaded/messages/directory npm start');
    process.exit(1);
  }

  messageProcessor.process(config.MESSAGES_PATH);
  // server.start(config.PORT);
};

start();

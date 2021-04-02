'use strict';

const config = require('./src/config');
const conversationLoader = require('./src/conversation/loader');
const messageLoader = require('./src/message/loader');
const server = require('./src/server');

const start = () => {
  if (!config.MESSAGES_PATH) {
    console.error('Config error: environment variable MESSAGES_PATH is not set');
    console.log('Start the application like this: MESSAGES_PATH=/path/to/your/downloaded/messages/directory npm start');
    process.exit(1);
  }

  const conversations = conversationLoader.load(config.MESSAGES_PATH);
  const messages = messageLoader.load(conversations);
  console.log(conversations['norbertbiczo_o7kyyzocmq']);
  // server.start(config.PORT);
};

start();

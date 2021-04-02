'use strict';

const { readdirSync } = require('fs');
const { basename } = require('path');

const Conversation = require('./conversation');

const PATHS = {
  INBOX: 'inbox',
  ARCHIVED: 'archived_threads',
};

const load = (path) => {
  console.log(`Loading conversations from: ${path}`);
  return loadAllConversations(path);
};

const loadAllConversations = (messagesPath) => {
  const conversations = {};

  const paths = [PATHS.INBOX, PATHS.ARCHIVED];
  for (const path of paths) {
    const conversationDirPath = `${messagesPath}/${path}`;
    const dirs = listConversationDirectories(conversationDirPath);
    for (const dir of dirs) {
      const conversation = parseConversation(dir, path === PATHS.ARCHIVED);
      conversations[conversation.id] = conversation;
    }
  }

  return conversations;
};

const listConversationDirectories = (path) => {
  return readdirSync(path, { withFileTypes: true })
    .filter(o => o.isDirectory())
    .map(o => `${path}/${o.name}`);
};

const parseConversation = (path, isArchived) => {
  /*const conversation = new Conversation();
  conversation.id = basename(path);
  conversation.path = path;
  conversation.isArchived = isArchived;*/
  const conversation = {};
  conversation.id = basename(path);
  conversation.path = path;
  conversation.isArchived = isArchived;

  return conversation;
};

module.exports = {
  load,
};

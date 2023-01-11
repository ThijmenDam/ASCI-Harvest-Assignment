// import { fetchMessageBatch } from './fetchMessageBatch';
// import { fetchTemplateFromDatabase } from './database';
// import { sendMessages } from './sendMessages';
// import { MessageTemplate, MessageBatch } from './types';

export const TEAMNAME = 'YOUR-TEAM';

/**
 * Hi ASCI! Start here :-)
 *
 * The goal: we want to send some messages to our customers! To do so, we have two data sources:
 *
 * 1. A batch of messages, which contains the selected template (see '2') and customer-specific information.
 * 2. A message template, which contains information about the message we want to send in several languages.
 *
 * Make sure you read README.md before proceeding.
 */
function main() {
  const templateIdx: number = 69;

  console.log('>> App started \n');

  // TODO (1): fetch template information from our database
  // const template: MessageTemplate = ...

  // TODO (2): construct the messages we'd like to send (based on the message template)
  // const messages: MessageBatch = ...

  // TODO (3): construct request and send message
  // sendMessages(template, messages, 'NL')
  //   .then(() => console.info('>> Messages sent successfully! \n'))
  //   .catch((error) => console.error(error));
  
  console.info('>> App finished \n');
}

main();

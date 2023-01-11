import axios from 'axios';
import {
  MessageBatch,
  MessageTemplate,
  SendMessageConfiguration,
  LanguageCode,
  TemplateContent,
  Message,
} from './types';
// import { TEAMNAME } from './main';

// TODO: This endpoint will be updated when the challenge has started.
//       Wait for confirmation of the software team and execute 'git pull' in the root of this repository.
const ENDPOINT = 'https://webhook.site/c9ac74c5-053e-480e-a364-49b3f5f19bc4';

/**
 * Make a POST request to our messaging endpoint.
 */
async function sendMessage(config: SendMessageConfiguration) {
  await axios.post(ENDPOINT, config);
}

/**
 * TODO: Develop the function according to its docstring
 * Complete the text of the message by replacing the dynamic variables with actual values.
 * For example: "My name is {{firstName}}" -> "My name is Thijmen"
 */
function insertVariablesIntoMessage(content: TemplateContent, message: Message): string {
  return 'SOME MESSAGE'
}

/**
 * Send messages to our customers for a specific language (based on the provided template and batch)
 */
export async function sendMessages(template: MessageTemplate, messageBatch: MessageBatch, langCode: LanguageCode) {
  // TODO: Construct a message batch that only contains Dutch messages
  // const messageBatchForLanguage: MessageBatch = ...

  // TODO: Find the template content for the provided language code
  // const contentForLanguage: TemplateContent = ...

  // TODO: Send a message for each message in the message batch
  // for (const message of messageBatchForLanguage.messages) {
    // sendMessage(...).catch((error) => console.error(error));
  // }
}

import { MessageBatch } from './types';

// NB: dummy data
// TODO add the phone number of one (or two) of your team members to the DUTCH message objects
const messages: MessageBatch = {
  templateID: 69,
  messages: [
    {
      languageCode: 'EN',
      phoneNumber: '00316...',
      variables: [['deliveryDays', '1']],
    },
    {
      languageCode: 'NL',
      phoneNumber: '00316...',
      variables: [['deliveryDays', '6']],
    },
    {
      languageCode: 'DE',
      phoneNumber: '00316...',
      variables: [['deliveryDays', '2']],
    },
    {
      languageCode: 'FR',
      phoneNumber: '00316...',
      variables: [['deliveryDays', '3']],
    },
    {
      languageCode: 'NL',
      phoneNumber: '00316...',
      variables: [['deliveryDays', '9']],
    },
  ],
};

/**
 * Fetch a specific batch of message from Marketing Cloud.
 *
 * TODO: the return type of this function can be improved. What should it be?
 *
 * NB: this is a dummy function, no actual call is made to Marketing Cloud.
 */
export function fetchMessageBatch(): any {
  return messages;
}

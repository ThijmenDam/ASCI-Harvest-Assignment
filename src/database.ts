import { MessageTemplate } from './types';

// NB: this template data would normally be stored in the database
const template: MessageTemplate = {
  id: 69,
  name: 'Order Confirmation - Media',
  content: [
    {
      languageCode: 'EN',
      text: 'Thank you for your order! Your package will be delivered in {{deliveryDays}} workdays.',
      variables: ['deliveryDays'],
    },
    {
      languageCode: 'NL',
      text: 'Bedankt voor je bestelling! Je pakket wordt binnen {{deliveryDays}} werkdagen bezorgd.',
      variables: ['deliveryDays'],
    },
    {
      languageCode: 'FR',
      text: "Merci d'avoir commandé! Votre colis sera livré en {{deliveryDays}} jours ouvrés.",
      variables: ['deliveryDays'],
    },
    {
      languageCode: 'DE',
      text:
        'Vielen Dank für Ihre Bestellung, {{firstName}}! ' +
        'Ihr Paket wird innerhalb von {{deliveryDays}} Werktagen geliefert.',
      variables: ['deliveryDays', 'firstName'],
    },
  ],
};

/**
 * Fetch a specific message template from our database.
 *
 * NB: this is a dummy function, no actual call is made to our database.
 *
 * TODO: the return type of this function can be improved. What should it be?
 */
export function fetchTemplateFromDatabase(templateIndex: number): any {
  return template;
}

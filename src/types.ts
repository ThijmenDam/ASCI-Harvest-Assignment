/** General types **/

export type LanguageCode = 'EN' | 'NL' | 'FR' | 'DE';

export interface SendMessageConfiguration {
  teamName: string;
  messageContent: string;
  phoneNumber: string;
}

type MessageVariableName = string;
type MessageVariableValue = string;
type MessageVariables = Array<[MessageVariableValue, MessageVariableName]>;

/** Message template types **/

export interface MessageTemplate {
  id: number;
  name: string;
  content: Array<TemplateContent>;
}

export interface TemplateContent {
  languageCode: LanguageCode;
  text: string;
  variables: Array<MessageVariableName>;
}

/** Message batch types **/

export interface MessageBatch {
  templateID: number;
  messages: Array<Message>;
}

export interface Message {
  languageCode: LanguageCode;
  phoneNumber: string;
  variables: MessageVariables;
}

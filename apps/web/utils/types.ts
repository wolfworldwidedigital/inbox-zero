import { Action, Rule } from "@prisma/client";
import { type gmail_v1 } from "googleapis";

// https://stackoverflow.com/a/53276873/2602771
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

// type guard for filters that removed undefined and null values
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

export type RuleWithActions = Rule & { actions: Action[] };

export type BatchError = {
  error: {
    code: number;
    message: string;
    errors: any[][];
    status: string;
  };
};

export function isBatchError(
  message: MessageWithPayload | BatchError,
): message is BatchError {
  return (message as BatchError).error !== undefined;
}

// export type ChatCompletionResponse = {
//   choices: { message: Message }[];
//   usage: {
//     prompt_tokens: number;
//     completion_tokens: number;
//     total_tokens: number;
//   };
// };

// export type ChatCompletionError = {
//   error: {
//     message: string;
//     type: "tokens" | "invalid_request_error"; // add more as needed
//     param: string;
//     code: "context_length_exceeded"; // add more as needed
//   };
// };

// // typeguard to check if the response is an error
// export function isChatCompletionError(
//   response: ChatCompletionResponse | ChatCompletionError
// ): response is ChatCompletionError {
//   return !!(response as ChatCompletionError).error;
// }

export type MessageWithPayload = gmail_v1.Schema$Message & {
  payload: gmail_v1.Schema$MessagePart;
};

export type MessageWithPayloadAndParsedMessage = MessageWithPayload & {
  parsedMessage: ParsedMessage;
};

export type ThreadWithPayloadMessages = gmail_v1.Schema$Thread & {
  messages: MessageWithPayload[];
};

export interface ParsedMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  historyId: string;
  internalDate: number;
  attachments: Attachment[];
  inline: Inline[];
  headers: ParsedMessageHeaders;
  textPlain?: string;
  textHtml?: string;
}

interface Attachment {
  filename: string;
  mimeType: string;
  size: number;
  attachmentId: string;
  headers: Headers;
}

interface Headers {
  "content-type": string;
  "content-description": string;
  "content-transfer-encoding": string;
  "content-id": string;
}

interface Inline {
  filename: string;
  mimeType: string;
  size: number;
  attachmentId: string;
  headers: Headers2;
}

interface Headers2 {
  "content-type": string;
  "content-description": string;
  "content-transfer-encoding": string;
  "content-id": string;
}

export interface ParsedMessageHeaders {
  subject: string;
  from: string;
  to: string;
  cc?: string;
  date: string;
  ["message-id"]?: string;
  ["reply-to"]?: string;
  references?: string;
  ["list-unsubscribe"]?: string;
}

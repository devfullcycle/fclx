// Original file: proto/chat.proto


export interface ChatRequest {
  'chatId'?: (string);
  'userId'?: (string);
  'userMessage'?: (string);
  '_chatId'?: "chatId";
}

export interface ChatRequest__Output {
  'chatId'?: (string);
  'userId': (string);
  'userMessage': (string);
  '_chatId': "chatId";
}

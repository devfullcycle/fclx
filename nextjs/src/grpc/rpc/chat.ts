import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _pb_ChatServiceClient, ChatServiceDefinition as _pb_ChatServiceDefinition } from './pb/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pb: {
    ChatRequest: MessageTypeDefinition
    ChatResponse: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _pb_ChatServiceClient> & { service: _pb_ChatServiceDefinition }
  }
}


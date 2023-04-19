// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _pb_ChatRequest, ChatRequest__Output as _pb_ChatRequest__Output } from '../pb/ChatRequest';
import type { ChatResponse as _pb_ChatResponse, ChatResponse__Output as _pb_ChatResponse__Output } from '../pb/ChatResponse';

export interface ChatServiceClient extends grpc.Client {
  ChatStream(argument: _pb_ChatRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_pb_ChatResponse__Output>;
  ChatStream(argument: _pb_ChatRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_pb_ChatResponse__Output>;
  chatStream(argument: _pb_ChatRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_pb_ChatResponse__Output>;
  chatStream(argument: _pb_ChatRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_pb_ChatResponse__Output>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  ChatStream: grpc.handleServerStreamingCall<_pb_ChatRequest__Output, _pb_ChatResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  ChatStream: MethodDefinition<_pb_ChatRequest, _pb_ChatResponse, _pb_ChatRequest__Output, _pb_ChatResponse__Output>
}

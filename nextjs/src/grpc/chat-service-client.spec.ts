import { ChatServiceClientFactory } from "./chat-service-client";

describe("ChatServiceClient", () => {
  test("grpc client", (done) => {
    const chatService = ChatServiceClientFactory.create();
    const stream = chatService.chatStream({
      user_id: "1",
      message: "Hello World",
    });
    stream.on('end', () => {
        done();
    })
  });
});

START TRANSACTION;
CREATE TABLE IF NOT EXISTS `chats` (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    initial_message_id TEXT NOT NULL,
    status VARCHAR(6) NOT NULL,
    token_usage SMALLINT NOT NULL,
    model VARCHAR(20) NOT NULL,
    model_max_tokens SMALLINT NOT NULL,
    temperature DECIMAL(3,2) NOT NULL,
    top_p DECIMAL(3,2) NOT NULL,
    n SMALLINT NOT NULL,
    stop VARCHAR(20) NOT NULL,
    max_tokens SMALLINT NOT NULL,
    presence_penalty DECIMAL(3,2) NOT NULL,
    frequency_penalty DECIMAL(3,2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS `messages` (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    chat_id VARCHAR(36) NOT NULL,
    role VARCHAR(10) NOT NULL,
    content TEXT NOT NULL,
    tokens SMALLINT NOT NULL,
    model VARCHAR(20) NOT NULL,
    erased BOOLEAN NOT NULL,
    order_msg SMALLINT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (chat_id) REFERENCES chats (id) ON DELETE CASCADE
);
COMMIT;
-- name: CreateChat :exec
INSERT INTO chats 
    (id, user_id, initial_message_id, status, token_usage, model, model_max_tokens,temperature, top_p, n, stop, max_tokens, presence_penalty, frequency_penalty, created_at, updated_at)
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);

-- name: AddMessage :exec
INSERT INTO messages (id, chat_id, role, content, tokens, model, erased, order_msg, created_at) VALUES(?,?,?,?,?,?,?,?,?);

-- name: FindChatByID :one
SELECT * FROM chats WHERE id = ?;

-- name: FindMessagesByChatID :many
SELECT * FROM messages WHERE erased=0 and chat_id = ? order by order_msg asc;

-- name: FindErasedMessagesByChatID :many
SELECT * FROM messages WHERE erased=1 and chat_id = ? order by order_msg asc;

-- name: SaveChat :exec
UPDATE chats SET user_id = ?, initial_message_id = ?, status = ?, token_usage = ?, model = ?, model_max_tokens=?, temperature = ?, top_p = ?, n = ?, stop = ?, max_tokens = ?, presence_penalty = ?, frequency_penalty = ?, updated_at = ? WHERE id = ?;

-- name: DeleteChatMessages :exec
DELETE FROM messages WHERE chat_id = ?;

-- name: DeleteErasedChatMessages :exec
DELETE FROM messages WHERE erased=1 and chat_id = ?;

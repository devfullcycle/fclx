package entity_test

import (
	"testing"

	"github.com/devfullcycle/fclx/chatservice/internal/domain/entity"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

var (
	modelName      = "gpt-3.5-turbo"
	modelMaxTokens = 10
	model          = entity.NewModel(modelName, modelMaxTokens)
	chatConfig     = &entity.ChatConfig{Model: model, Temperature: 1}

	userID     = "510ae7e0-4122-49e3-9384-68fa573c2afc"
	systemRole = "system"
	userRole   = "user"

	basicMessageContent    = "BasicMessageContent"
	messageTooLargeContent = "MessageTooLargeContent"

	mockTikToken = &MockTikToken{}
)

type MockTikToken struct {
	mock.Mock
}

func (m *MockTikToken) CountTokens(model, prompt string) int {
	args := m.Called(model, prompt)
	return args.Int(0)
}

func TestAddMessageShouldNotThrowErrorWhenMessageIsTooLarge(t *testing.T) {
	mockTikToken.On("CountTokens", model.Name, basicMessageContent).Return(2)

	initialMessage := newMessage(systemRole, basicMessageContent, model)

	chat, err := entity.NewChat(userID, initialMessage, chatConfig)
	if err != nil {
		t.Fatal("error creating chat")
	}

	mockTikToken.On("CountTokens", model.Name, messageTooLargeContent).Return(99)
	messageTooLarge := newMessage(userRole, messageTooLargeContent, model)

	err = chat.AddMessage(messageTooLarge)
	errMessage := "message too large"
	assert.EqualErrorf(t, err, errMessage, "Error should be: %v, got: %v", errMessage, err)
}

func TestNewChatShouldNotThrowErrorWhenInitialMessageIsTooLarge(t *testing.T) {
	mockTikToken.On("CountTokens", model.Name, messageTooLargeContent).Return(99)

	initialMessage := newMessage(systemRole, messageTooLargeContent, model)

	_, err := entity.NewChat(userID, initialMessage, chatConfig)
	errMessage := "message too large"
	assert.EqualErrorf(t, err, errMessage, "Error should be: %v, got: %v", errMessage, err)
}

func newMessage(role, content string, model *entity.Model) *entity.Message {
	message, _ := entity.NewMessage(role, content, mockTikToken, model)

	return message
}

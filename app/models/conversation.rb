class Conversation < ActiveRecord::Base
  has_many :user_conversations
  has_many :users, through: :user_conversations

  has_many :conversation_hashtags
  has_many :hashtags, through: :conversation_hashtags
end
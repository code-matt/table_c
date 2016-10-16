class ConversationHashtag < ActiveRecord::Base
  belongs_to :conversation
  belongs_to :hashtag
end
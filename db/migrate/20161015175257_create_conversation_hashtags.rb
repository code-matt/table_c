class CreateConversationHashtags < ActiveRecord::Migration[5.0]
  def change
    create_table :conversation_hashtags do |t|
      t.integer :conversation_id
      t.integer :hashtag_id
    end
  end
end

class Api::V1::ConversationsController < ApplicationController
  before_action :authenticate_user
  
  def index
    if params["location"] && !params["load"]
      value = sanitize_value(params["location"])
      render json: Conversation.all.where("location ILIKE ?","%#{value}%").uniq.pluck(:location)
    end
    if params["load"]
      value = sanitize_value(params["location"])
      render json: build_res(Conversation.all.where("location ILIKE ?","%#{value}%"))
    end
  end

  def build_res(conversations)
    res = []
    conversations.each do |convo|
      res << {
        convo: convo,
        creator: User.find(convo.creator_id),
        tags: convo.hashtags
      }
    end
    res
  end

  def sanitize_value(value)
    value.parameterize
  end
end

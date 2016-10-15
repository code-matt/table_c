class Meal < ActiveRecord::Base
  has_many :conversations
end
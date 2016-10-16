class CreateConverations < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.integer :meal_id
      t.string :location
      t.datetime :time
      t.integer :max_seats
      t.integer :creator_id
      t.string :time
      t.string :place
      t.string :title
    end
  end
end

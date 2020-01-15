class AddIndextoReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, [:reviewer_id, :reservation_id]
  end
end

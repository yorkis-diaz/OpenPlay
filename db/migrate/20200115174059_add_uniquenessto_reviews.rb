class AddUniquenesstoReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, [:reviewer_id, :reservation_id]
    add_index :reviews, [:reviewer_id, :reservation_id], unique: true
  end
end

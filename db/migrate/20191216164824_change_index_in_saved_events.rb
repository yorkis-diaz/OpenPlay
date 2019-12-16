class ChangeIndexInSavedEvents < ActiveRecord::Migration[5.2]
  def change
    remove_index :saved_events, [:user_id, :event_id]
    add_index :saved_events, [:user_id, :event_id], unique: true
  end
end

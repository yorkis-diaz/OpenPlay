class AddIndexToSavedEvents < ActiveRecord::Migration[5.2]
  def change
    add_index :saved_events, [:user_id, :event_id]
  end
end

class CreateSavedEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_events do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :saved_events, [:user_id, :event_id]
  end
end

class AddRemoveColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :lat, :float, null: false
    add_column :events, :lng, :float, null: false
    remove_column :events, :start_time
    remove_column :events, :date
    add_column :events, :participation_open_time, :time, null: false
    add_column :events, :participation_close_time, :time, null: false
    add_column :events, :event_duration, :float, null: false
    remove_index :reviews, :title
    remove_column :reviews, :title
    remove_index :reviews, :reviewer_id
  end
end

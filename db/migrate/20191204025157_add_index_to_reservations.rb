class AddIndexToReservations < ActiveRecord::Migration[5.2]
  def change
  end
  add_index :reservations, :participant_id
  add_index :reservations, :event_id
end

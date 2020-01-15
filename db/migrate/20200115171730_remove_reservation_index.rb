class RemoveReservationIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :reservations, [:participant_id, :event_id]
  end
end

class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.time :time, null: false
      t.integer :num_participants, null: false
      t.date :date, null: false
      t.integer :participant_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :reservations, [:participant_id, :event_id], unique: true
  end
end

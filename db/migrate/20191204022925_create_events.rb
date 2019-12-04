class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :info, null: false
      t.string :event_city, null: false
      t.string :event_state, null: false
      t.string :event_zipcode, null: false
      t.string :event_country, null: false
      t.string :type, null: false
      t.time :start_time, null: false
      t.date :date, null: false
      t.string :phone, null: false
      t.string :skill_level, null: false, unique: true
      t.integer :rating, null: false, default: 0
      t.string :address, null: false
      t.integer :capacity, null: false
      t.float :cost, null: false

      t.timestamps
    end
    add_index :events, :name
    add_index :events, :event_city
    add_index :events, :skill_level
  end
end

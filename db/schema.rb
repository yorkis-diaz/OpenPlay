# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_17_030349) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.string "info", null: false
    t.string "event_city", null: false
    t.string "event_state", null: false
    t.string "event_zipcode", null: false
    t.string "event_country", null: false
    t.string "event_type", null: false
    t.string "phone", null: false
    t.string "skill_level", null: false
    t.integer "rating", default: 0, null: false
    t.string "address", null: false
    t.integer "capacity", null: false
    t.float "cost", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.time "participation_open_time", null: false
    t.time "participation_close_time", null: false
    t.float "event_duration", null: false
    t.index ["event_city"], name: "index_events_on_event_city"
    t.index ["name"], name: "index_events_on_name"
    t.index ["skill_level"], name: "index_events_on_skill_level"
  end

  create_table "reservations", force: :cascade do |t|
    t.time "time", null: false
    t.integer "num_participants", null: false
    t.date "date", null: false
    t.integer "participant_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_reservations_on_event_id"
    t.index ["participant_id", "event_id"], name: "index_reservations_on_participant_id_and_event_id", unique: true
    t.index ["participant_id"], name: "index_reservations_on_participant_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.integer "rating", null: false
    t.integer "reviewer_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "reservation_id", null: false
    t.index ["event_id"], name: "index_reviews_on_event_id"
  end

  create_table "saved_events", force: :cascade do |t|
    t.integer "user_id"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "event_id"], name: "index_saved_events_on_user_id_and_event_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end

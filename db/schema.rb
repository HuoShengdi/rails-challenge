# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20170117222547) do

  create_table "item_feedbacks", force: :cascade do |t|
    t.string   "order_id",    null: false
    t.integer  "feedback_id", null: false
    t.integer  "item_id",     null: false
    t.integer  "rating",      null: false
    t.text     "comment"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "item_feedbacks", ["feedback_id"], name: "index_item_feedbacks_on_feedback_id"
  add_index "item_feedbacks", ["order_id"], name: "index_item_feedbacks_on_order_id"

  create_table "order_feedbacks", force: :cascade do |t|
    t.string   "order_id",   null: false
    t.integer  "rating",     null: false
    t.text     "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "order_feedbacks", ["order_id"], name: "index_order_feedbacks_on_order_id", unique: true

end

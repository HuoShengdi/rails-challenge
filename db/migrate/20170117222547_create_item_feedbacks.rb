class CreateItemFeedbacks < ActiveRecord::Migration
  def change
    create_table :item_feedbacks do |t|
      t.string :order_id, null: false
      t.integer :feedback_id, null: false
      t.integer :item_id, null: false
      t.integer :rating, null: false
      t.text :comment
      t.timestamps null: false
    end

    add_index :item_feedbacks, :feedback_id
    add_index :item_feedbacks, :order_id
  end
end

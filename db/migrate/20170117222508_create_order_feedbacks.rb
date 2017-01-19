class CreateOrderFeedbacks < ActiveRecord::Migration
  def change
    create_table :order_feedbacks do |t|
      t.string :order_id, null: false
      t.integer :rating, null: false
      t.text :comment
      t.timestamps null: false
    end

    add_index :order_feedbacks, :order_id, unique: true
  end
end

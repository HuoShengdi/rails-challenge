class ItemFeedback < ActiveRecord::Base
  validates :order_id, :item_id, :feedback_id, presence: true

  belongs_to :order_feedback, foreign_key: :feedback_id
end

class OrderFeedback < ActiveRecord::Base
  validates :order_id, presence: true, uniqueness: true

  has_many :item_feedbacks, foreign_key: :feedback_id
  belongs_to :order
end

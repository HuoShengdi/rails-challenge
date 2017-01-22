class Api::OrderFeedbackController < ApplicationController
  def create
    @order_feedback = OrderFeedback.new(
      id: feedback_params[:order_id],
      order_id: feedback_params[:order_id],
      rating: feedback_params[:rating],
      comment: feedback_params[:comment]
    )
    print feedback_params[:items]
    @items_feedback = feedback_params[:items].map do |item|
      ItemFeedback.new(
        order_id: feedback_params[:order_id],
        feedback_id: @order_feedback.id,
        item_id: item[:item_id],
        rating: item[:rating],
        comment: item[:comment]
      )
    end

    if OrderFeedback.exists?(order_id: params[:id])
      render json: {errors:["Feedback already submitted for this order"], status: 422}
    else
      OrderFeedback.transaction do
        @order_feedback.save
        @items_feedback.each(&:save)
      end
      render json: @order_feedback.errors.full_messages
    end

  end

  private
  def feedback_params
    params.require(:feedback).permit(:order_id, :rating, :comment, items:[:item_id, :rating, :comment])
  end
end

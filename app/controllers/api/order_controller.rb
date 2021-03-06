#Dummy Model
Order = Struct.new(:id, :date, :order_items)
OrderItem = Struct.new(:id, :meal_name)

class Api::OrderController < ApplicationController
  def show
    @order = find_order(params[:id])
    if OrderFeedback.exists?(order_id: params[:id])
      respond_to do |format|
        format.json {render json: "Feedback already submitted for this order", status: :unprocessable_entity}
      end
    else
      render json: @order
    end
  end

  private
  def find_order(order_id)
    # Will return an Order Model or nil
    # feel free to implement this with ActiveRecord if this is insufficient

    Order.new(
      "GO#{order_id}",
      Date.new(2016, 4, 10),
      [ OrderItem.new(101, "Samsui Chicken Rice"), OrderItem.new(121, "Grilled Farm Fresh Chicken") ]
    )
  end
end

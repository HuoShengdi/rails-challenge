export const sendOrderFeedback = (orderFeedback, success)=>{
  $.ajax({
    url: '/api/order/' + orderFeedback.order_id + '/order_feedback',
    type: 'POST',
    success
  });
}

export const sendItemFeedback = (itemFeedback, success)=>{
  $.ajax({
    url: '/api/order/' + itemFeedback.order_id + '/item_feedback',
    type: 'POST',
    success
  })
}

export const getOrder = (id, success)=>{
  $.ajax({
    url: '/api/order/' + id,
    type: 'GET',
    success
  });
}

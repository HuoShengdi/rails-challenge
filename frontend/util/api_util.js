export const sendOrderFeedback = (orderFeedback, success, error)=>{
  $.ajax({
    url: '/api/order/' + orderFeedback.order_id + '/order_feedback',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({feedback: orderFeedback}),
    success,
    error(xhr) {
      console.log(xhr);
      const errors = xhr.responseText;
      error(errors);
    }
  });
}

export const sendItemFeedback = (itemFeedback, success)=>{
  $.ajax({
    url: '/api/order/' + itemFeedback.order_id + '/item_feedback',
    type: 'POST',
    success
  })
}

export const getOrder = (id, success, error)=>{
  $.ajax({
    url: '/api/order/' + id,
    type: 'GET',
    success,
    error(xhr) {
      console.log(xhr);
      const errors = xhr.responseText;
      error(errors);
    }
  });
}

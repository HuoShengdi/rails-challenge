import {SEND_FEEDBACK} from '../constants/feedback_constants';
import {GET_ORDER_FEEDBACK} from '../constants/feedback_constants';

export const sendFeedback = (feedback)=>{
  return {
    type: SEND_FEEDBACK,
    feedback: feedback
  }
}

export const getOrderFeedback = (order_id)=>{
  return {
    type: GET_ORDER_FEEDBACK,
    order_id: order_id
  }
}

export const receiveFeedback = (items)=>{
  return {
    type: RECEIVE_FEEDBACK,
    items: items
  }
}

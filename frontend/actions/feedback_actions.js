import {SEND_FEEDBACK, GET_ORDER_FEEDBACK, RECEIVE_FEEDBACK} from '../constants/feedback_constants';


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

export const receiveFeedback = (order)=>{
  return {
    type: RECEIVE_FEEDBACK,
    order: order
  }
}

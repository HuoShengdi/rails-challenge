import {SEND_FEEDBACK, GET_ORDER_FEEDBACK, RECEIVE_ORDER_FEEDBACK} from '../constants/feedback_constants';
import {sendOrderFeedback, sendItemFeedback, getOrderFeedback} from '../util/api_util';

const initialState = {};

const feedbackReducer = (state = initialState, action)=>{
  switch(action.type) {
    case SEND_FEEDBACK:
      sendOrderFeedback(action.feedback.order, ()=>{});
      action.feedback.items.forEach((item)=>{
        sendItemFeedback(item);
      });
      return state;
      break;
    case GET_ORDER_FEEDBACK:
      return state;
      break;
    case RECEIVE_FEEDBACK:
      const newState = {};
      action.items.forEach((item)=>{
        newState[item.id] = item;
      })
      return newState;
      break;
    default:
      return state;
  }
}

export default feedbackReducer;

import {combineReducers} from 'redux'
import feedbackReducer from './feedback_reducer'

const rootReducer = combineReducers({
  feedback: feedbackReducer
});

export default rootReducer;

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import FeedbackForm from './feedback_form';
import {sendFeedback, receiveFeedback} from '../../actions/feedback_actions';

const mapStateToProps = (state)=>(
  {items: allItems(state)}
)

const mapDispatchToProps = (dispatch)=>(
  {sendFeedback: (feedback) => dispatch(sendFeedback(todo)),
  receiveFeedback: (items) => dispatch(receiveFeedback(items))}
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

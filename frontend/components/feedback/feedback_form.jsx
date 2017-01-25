import React, { PropTypes } from 'react';
import ItemFeedbackForm from './item_feedback_form';
import FeedbackError from './feedback_error';
import RatingBar from './rating_bar';
import {sendOrderFeedback, getOrder} from '../../util/api_util';
import {browserHistory} from 'react-router';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_id: this.props.params.order_id,
      rating: 3,
      comment: "",
      error: false
    }
    this.updateItem = this.updateItem.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount(){
    getOrder(this.props.params.order_id, this.props.receiveFeedback, this.handleError);
  }

  handleError(error){
    this.setState({error: error})
  }

  updateRating(value){
    this.setState({rating: value});
  }

  updateItem(item){
    this.setState({[item.item_id]: item});
  }

  handleComment(e){
    this.setState({comment: e.target.value})
  }

  handleSubmit(e){
    const items = this.props.items.map((item)=>{
      return this.state[item.id];
    })

    const order = {
      order_id: this.state.order_id,
      rating: this.state.rating,
      comment: this.state.comment,
      items: items
    }

    const submitSuccess = ()=>{
      browserHistory.push(this.props.location.pathname + '/complete');
      return false;
    }

    sendOrderFeedback(order, submitSuccess, this.handleError);
  }

  render() {
    const itemForms = this.props.items.map((item)=>{
      return(
        <ItemFeedbackForm key={item.id} updateItem={this.updateItem} item={item}/>
      )
    })
    const FForm = (
      <div className='feedback-form'>
        <h1 className='feedback-title'>Your Feedback for Order {"GO"+this.props.params.order_id}</h1>
        <h2 className='meal-title'>Meals</h2>
        <div className='items-box'>
          {itemForms}
        </div>
        <h2 className='delivery-title'>Rate your delivery:</h2>
        <div className='delivery-box'>

          <form className='delivery-form'>
            <textarea id='order-comment' value={this.state.comment} onChange={this.handleComment}></textarea>
            <RatingBar updateRating={this.updateRating}/>
          </form>
        </div>

        <button className='submit-button' onClick={this.handleSubmit}>Submit Feedback</button>
      </div>
    );
    if(this.state.error){
      return (
        <FeedbackError className='feedback-error' error={this.state.error} />
      );
    } else {
      return FForm;
    }
  }
}

export default FeedbackForm

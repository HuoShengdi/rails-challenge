import React, { PropTypes } from 'react';
import ItemFeedbackForm from './item_feedback_form';
import RatingBar from './rating_bar';
import {getOrder} from '../../util/api_util';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    const itemMap = {};
    this.props.items.forEach((item)=>{
      itemMap[item.id] = item;
    })
    this.state = {
      order: {
        order_id: this.props.params.order_id,
        rating: 3,
        comment: "",
        items: itemMap
      }
    }
    this.updateRating = this.updateRating.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount(){
    getOrder(this.props.params.order_id, this.props.receiveFeedback);
  }

  updateRating(value){
    this.setState({rating: value});
  }

  updateItem(item){
    const updatedItems = this.state.items;
    updatedItems[item.id] = item;
    this.setState({items: updatedItems})
  }

  render() {
    const itemForms = this.props.items.map((item)=>{
      return(
        <ItemFeedbackForm key={item.id} updateItem={this.updateItem} item={item}/>
      )
    })
    return (
      <div>
        <h1>Your Feedback</h1>
        {itemForms}
        <h2>Rate your delivery:</h2>
        <form>
          <textarea id='order-comment' value={this.state.order.comment}></textarea>
          <RatingBar updateRating={this.updateRating}/>
        </form>
      </div>
    )
  }
}

export default FeedbackForm

import React, { PropTypes } from 'react'
import RatingBar from './rating_bar'

class ItemFeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: this.props.item.id,
        rating: 3,
        comment: ""
      }
    }
    this.updateRating = this.updateRating.bind(this);
  }

  updateRating(value){
    this.setState({rating: value});
  }

  render() {
    return (
      <div>
        <h3>{this.props.item.meal_name}</h3>
        <form>
          <textarea id='order-comment' value={this.state.item.comment}></textarea>
          <RatingBar updateRating={this.updateRating}/>
        </form>
      </div>
    )
  }
}

export default ItemFeedbackForm

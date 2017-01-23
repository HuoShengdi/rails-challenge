import React, { PropTypes } from 'react'
import RatingBar from './rating_bar'

class ItemFeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: this.props.item.id,
      rating: 3,
      comment: ""
    }
    this.updateRating = this.updateRating.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentWillMount(){
    this.props.updateItem(this.state);
  }

  updateRating(value){
    this.setState({rating: value});
    const newState = this.state;
    newState.rating = value;
    this.props.updateItem(newState);
  }

  handleComment(e){
    this.setState({comment: e.target.value});
    const newState = this.state;
    newState.comment = e.target.value;
    this.props.updateItem(newState);
  }

  render() {
    return (
      <div className='item-form'>
        <h3 className='item-name'>{this.props.item.meal_name}</h3>
        <form>
          <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
          <RatingBar updateRating={this.updateRating}/>
        </form>
      </div>
    )
  }
}

export default ItemFeedbackForm

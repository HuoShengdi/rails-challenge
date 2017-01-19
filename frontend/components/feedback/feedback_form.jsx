import React, { PropTypes } from 'react'

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        order_id: this.props.params.order_id,
        rating: 3,
        comment: ""
      },
      items: []
    }
  }

  componentDidMount(){
    this.props.receiveFeedback(this.props.params.order_id);
  }

  render() {
    return (
      <div>
        <h1>Your Feedback</h1>
        <form>
          <textarea id='order-comment' value={this.state.order.comment}></textarea>
        </form>
      </div>
    )
  }
}

export default FeedbackForm

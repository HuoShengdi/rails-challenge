import React from 'react';

class FeedbackThanks extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='feedback-thanks'>
        <h2>Feedback submitted for order {"GO" + this.props.params.order_id}.<br/> Thank you for ordering from Grain!</h2>
      </div>
    )
  }
}

export default FeedbackThanks;

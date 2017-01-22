import React from 'react';

class FeedbackError extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h2>You have already submitted feedback for this order!</h2>
      </div>
    )
  }
}

export default FeedbackError;

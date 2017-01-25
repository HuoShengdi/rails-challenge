import React from 'react';

class FeedbackError extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h2>Error</h2>
        {this.props.error}
      </div>
    )
  }
}

export default FeedbackError;

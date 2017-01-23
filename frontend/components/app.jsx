import React, { PropTypes } from 'react';



const App = React.createClass({
  render () {
    return (
      <div className='app-main'>
        <h1 className='grain-title'>Grain</h1>
        {this.props.children}
      </div>
    )
  }
});

export default App;

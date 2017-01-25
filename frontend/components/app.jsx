import React, { PropTypes } from 'react';



class App extends React.Component {
  render () {
    return (
      <div className='app-main'>
        <img className='logo' src="/assets/grain-logo.png" alt="Grain" />
        <div className='app-container'>
          {this.props.children}
        </div>

      </div>
    )
  }
};

export default App;

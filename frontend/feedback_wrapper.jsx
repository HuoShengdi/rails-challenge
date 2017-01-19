import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', ()=>{
  const rootElement = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootElement);
})

import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import App from './app';

const Root = ({ store })=>(
   <Provider store={ store }>
     <Router history={browserHistory}>
       <Route path='/order/:order_id/feedback' component={App}/>
     </Router>
   </Provider>
);

export default Root;
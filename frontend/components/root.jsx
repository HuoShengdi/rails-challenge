import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import App from './app';
import FeedbackContainer from './feedback/feedback_container';
import FeedbackThanks from './feedback/feedback_thanks';

const Root = ({ store })=>(
   <Provider store={ store }>
     <Router history={browserHistory}>
       <Route path='/' component={App}>
          <Route path='/order/:order_id/feedback' component={FeedbackContainer}/>
          <Route path='/order/:order_id/feedback/complete' component={FeedbackThanks}/>
       </Route>
     </Router>
   </Provider>
);

export default Root;

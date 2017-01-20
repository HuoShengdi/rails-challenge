import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import App from './app';
import FeedbackContainer from './feedback/feedback_container';

const Root = ({ store })=>(
   <Provider store={ store }>
     <Router history={browserHistory}>
       <Route path='/' component={App}>
          <Route path='/order/:order_id/feedback' component={FeedbackContainer}/>
       </Route>
     </Router>
   </Provider>
);

export default Root;

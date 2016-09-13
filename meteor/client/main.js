import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import store from '../imports/store';
import routes from '../imports/routes';

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('render-target'));
});

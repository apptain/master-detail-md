import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app'
import ReservationsContainer from './containers/app/reservationsContainer'

export default (
  <Route path="/" component={App}>
		<IndexRoute component={ReservationsContainer}/>
  </Route>
)

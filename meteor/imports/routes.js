import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app'
import ReservationsContainer from './containers/app/reservationsContainer'
import LocationsContainer from './containers/app/locationsContainer'

export default (
  <Route path="/" component={App}>
		<IndexRoute component={ReservationsContainer}/>
    <Route path="/locations" component={LocationsContainer}/>
  </Route>
)

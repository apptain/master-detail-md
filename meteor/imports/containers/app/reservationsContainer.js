import React, { PropTypes, Component } from 'react'
import MasterDetailsContainer from '../global/masterDetailsContainer'
import reservationsSchema from '../../schemas/reservationSchema'
import collections from '../../collections'
import reservationColumnDefs from '../../columnDefs/reservationColumnDefs'

const ReservationsContainer = React.createClass({
  render() {
    return (
      <div>
        <MasterDetailsContainer
          schema={reservationsSchema}
          collectionName="Reservations"
					collection={collections.Reservations}
          columnDefs={reservationColumnDefs}
        />
      </div>
    )
  }
})

export default ReservationsContainer

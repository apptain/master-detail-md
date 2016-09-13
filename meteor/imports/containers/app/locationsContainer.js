import React, { PropTypes, Component } from 'react'
import MasterDetailsContainer from '../global/masterDetailsContainer'
import locationsSchema from '../../schemas/locationSchema'
import collections from '../../collections'
import locationColumnDefs from '../../columnDefs/locationColumnDefs'

const LocationsContainer = React.createClass({
  render() {
    return (
      <div>
        <MasterDetailsContainer
          schema={locationsSchema}
          collectionName="Locations"
					collection={collections.Locations}
          columnDefs={locationColumnDefs}
        />
      </div>
    )
  }
})

export default LocationsContainer

import Reservations from '../imports/collections/reservationsCollection'
import reservationStubs from '../imports/stubs/reservationStubs'

import Locations from '../imports/collections/locationsCollection'
import locationStubs from '../imports/stubs/locationStubs'

export default function () {
  if (!Reservations.findOne()) {
    var stubs = reservationStubs.stubs(10)
    stubs.forEach(function(stub) {
      Reservations.insert(stub)
    })
  }

  if (!Locations.findOne()) {
    var stubs = locationStubs.stubs(5)
    stubs.forEach(function(stub) {
      Locations.insert(stub)
    })
  }
}

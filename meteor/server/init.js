import Reservations from '../imports/collections/reservationsCollection'
import reservationStubs from '../imports/stubs/reservationStubs'

export default function () {
  if (!Reservations.findOne()) {
    var stubs = reservationStubs.stubs(10)
    stubs.forEach(function(stub) {
      Reservations.insert(stub)
    })
  }
}

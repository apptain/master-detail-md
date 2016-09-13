import {Mongo} from 'meteor/mongo'
import ReservationSchema from '../schemas/reservationSchema'

const Reservations = new Mongo.Collection('reservations')
Reservations.attachSchema(ReservationSchema)

export default Reservations

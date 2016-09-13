import {Mongo} from 'meteor/mongo'
import LocationSchema from '../schemas/locationSchema'

const Locations = new Mongo.Collection('locations')
Locations.attachSchema(LocationSchema)

export default Locations

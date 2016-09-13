import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const LocationSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  name: {
    type: String
  },
  phone: { 
    type: String
  }
})

export default LocationSchema

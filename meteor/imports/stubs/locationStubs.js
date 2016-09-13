import faker from 'faker'
import {Mongo} from 'meteor/mongo'

export default {
  stub() {
    const newID = new Mongo.ObjectID
    return {
      _id: newID._str,
      name: faker.company.companyName(),
      phone: faker.phone.phoneNumber()
    }
  },
  //TODO Make abstract
  stubs(count) {
    var stubs = []
    for(i = 0; i < count; i++) {
      stubs.push(this.stub())
    }
    return stubs
  }
}

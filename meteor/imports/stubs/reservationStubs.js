import faker from 'faker'
import {Mongo} from 'meteor/mongo'

export default {
  stub() {
    const newID = new Mongo.ObjectID
    return {
      _id: newID._str,
      dateTime: faker.date.future(),
      name: faker.name.findName(),
      partyNumber: faker.random.number({min:1, max:20}),
      status: 'active',
      dateCreated: faker.date.past()
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

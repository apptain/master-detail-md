import {Content, Comments} from '/imports/collections';
import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';
import { reservationGridDto } from '../../imports/dtos/reservationDtos'
import Reservations from '../../imports/collections/reservationsCollection'
import * as Collections from '../../imports/collections'

export default function () {
  Meteor.publish('doc', function (id) {
    return Reservations.find(filters, dto);
  });

  // Meteor.publish('reservations', function (filters = {}, dto = {}) {
  //   return Reservations.find(filters, dto);
  // });

  Meteor.publish('docs', function (collectionName, filters = {}, dto = {}) {
    return Collections[collectionName].find(filters, dto);
  });
}

import {Content, Comments} from '/imports/collections';
import { Meteor } from 'meteor/meteor';
import * as Collections from '../../imports/collections'

export default function () {
  Meteor.publish('docs', function (collectionName, filters = {}, dto = {}) {
    return Collections[collectionName].find(filters, dto);
  });
}

import * as Collections from '/imports/collections';

export default function () {
  Meteor.methods({
    'docsUpsert': function (parameters) {
      const collectionName = parameters.collectionName
      var docs = parameters.docs

      var upsert = function (doc) {
        if(doc._id) {
          return Collections[collectionName].update(
            doc._id, {$set: doc}
          )
        } else {
          return Collections[collectionName].insert(doc)
        }
      }
      if (Array.isArray(docs)) {
        docs.forEach(function(doc) {
          doc = upsert(doc);
        })
      } else {
        //We are assuming it's an object. Will add checks to ensure
        docs = upsert(docs);
      }
      return docs;
    }
  });
}

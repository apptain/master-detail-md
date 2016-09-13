//bad? https://subvisual.co/blog/posts/79-a-bridge-between-redux-and-meteor
//http://marmelab.com/blog/2015/11/27/meteor-webpack-react-redux.html
//medium?
//https://medium.com/front-end-developers/how-we-redux-part-1-introduction-18a24c3b7efe#.9gjieumw1

import { CALL_API } from 'redux-api-middleware'
import actionTypes from '../../actionTypes/global'
import settings from '../../settings'

export function queried(docs) {
  return {
    type: actionTypes.docs.queried,
    docs: docs
  }
}

export function upsert(collectionName, doc) {
  return {
    [CALL_API]: {
      method: 'post',
      endpoint: settings.apiUrl + '/methods/docsUpsert',
      body: JSON.stringify({collectionName, docs: doc}),
      headers: { 'Content-Type': 'application/json' },
      types: [
        actionTypes.docs.upsert.request,
        actionTypes.docs.upsert.success,
        actionTypes.docs.upsert.failure,
      ]
    }
  }
}

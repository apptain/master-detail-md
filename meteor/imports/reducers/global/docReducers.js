import actionTypes from '../../actionTypes/global'

const initialState = {
	doc: {},
  docSelectPending: false,
	docs: [],
  docsQueryPending: false,
  docsUpsertPending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    //publication
    case actionTypes.docs.queried:
      return Object.assign({}, state, {
        docs: action.docs
      })
    case actionTypes.docs.select.request:
      return Object.assign({}, state, {
        docSelectPending: true
      })
    case actionTypes.docs.select.success:
      return Object.assign({}, state, {
        docSelectPending: false,
        doc: action.payload,
      })
    case actionTypes.docs.select.failure:
      return Object.assign({}, state, {
        docSelectPending: false
      })
    case actionTypes.docs.query.request:
      return Object.assign({}, state, {
        docsQueryPending: true
      })
    case actionTypes.docs.query.success:
      return Object.assign({}, state, {
        docsQueryPending: false,
        docs: action.payload
      })
    case actionTypes.docs.query.failure:
      return Object.assign({}, state, {
        docsUpsertPending: false
      })
    case actionTypes.docs.upsert.request:
      return Object.assign({}, state, {
        docsUpsertPending: true
      })
    case actionTypes.docs.upsert.success:
      return Object.assign({}, state, {
        docsUpsertPending: false,
        doc: action.payload
      })
    case actionTypes.docs.upsert.failure:
      return Object.assign({}, state, {
        docsUpsertPending: false
      })
    default:
      return state
  }
}


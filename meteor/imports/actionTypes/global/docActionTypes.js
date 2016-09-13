export default {
  //temp
  queried: 'DOCS_QUERIED',

	// api calls
  select: {
    request: 'DOC_SELECT_REQUEST',
    success: 'DOC_SELECT_READY',
    failure: 'DOC_SELECT_FAILURE'
  },
	query: {
    request: 'DOCS_QUERY_REQUEST',
    success: 'DOCS_QUERY_READY',
    failure: 'DOCS_QUERY_FAILURE'
  },
	// CRUD operations of create, update, and delete are assumed
	// Change request types
	upsert: {
    request: 'DOC_UPSERT_REQUEST',
    success: 'DOC_UPSERT_READY',
    failure: 'DOC_UPSERT_FAILURE'
  },
	change: {
    request: 'DOC_CHANGE_REQUEST',
    success: 'DOC_CHANGE_READY',
    failure: 'DOC_CHANGE_FAILURE'
  },
	changeIniators: {
		edit: 'DOC_EDIT',
		fulfill: 'DOC_FULFILL',
		cancel: 'DOC_CANCEL'
	},
}

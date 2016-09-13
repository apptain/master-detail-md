import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'

import * as actions from '../../actions/global'
import Grid from '../../components/global/grid'
import Modal from '../../components/global/modal'
import Form from '../../components/global/form'

const MasterDetailsContainer = React.createClass({
  propTypes: {
    schema: PropTypes.object.isRequired,
		collection: PropTypes.object.isRequired,
    collectionName: PropTypes.string.isRequired,
    columnDefs: PropTypes.array.isRequired
  },
  componentDidMount() {
    //TODO move into actions/reducers
    const docsSub = Meteor.subscribe('docs', this.props.collectionName)
    setTimeout(this.handleSubs(docsSub), 0)
  },
  handleSubs(docsSub) {
    Meteor.autorun(() => {
      if(docsSub.ready()) {
        this.props.docsReady(
					this.props.collection.find().fetch())
      }
    })
  },
  onRowSelected(e) {
    this.docModalShow(e.node.data)
  },
  docModalShow(doc) {
    //TODO clean this up, don't use params as vars
    if(!doc){
      doc = {}
    }
    this.props.docModalShow(doc)
  },
  render() {
    return (
      <div className="master-details">
        <a className="new-entry-link"
           onClick={this.docModalShow.bind(this)}>Create New Entry</a>
        { this.props.docs ?
          <Grid
						rowData={this.props.docs}
						columnDefs={this.props.columnDefs}
						onRowSelected={this.onRowSelected.bind(this)}
					/>
          :
          <div>No Data</div>
        }
      </div>
    )
  }
})

var mapStateToProps = function(state) {
  return {
    doc: state.docs.doc,
    docs: state.docs.docs,
    docSelectPending: state.docs.docSelectPending,
    docsQueryPending: state.docs.docsQueryPending,
    docsChangePending: state.docs.docsChangePending
  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    docsReady(docs) {
      dispatch(actions.docs.queried(docs))
    },
    docModalShow(doc) {
      let id = doc._id || 'new' + this.collectionName
      dispatch(actions.overlays.add(id,(
        <Modal id={id} onClose={this.docModalClose}>
          <Form
            schema={this.schema}
            doc={doc}
            collectionName={this.collectionName}
            onSubmit={this.docUpsert}
            formId={id}
          />
        </Modal>
      )))
    },
    docModalClose(id) {
      dispatch(actions.overlays.remove(id))
    },
    docUpsert(collectionName, doc) {
      dispatch(actions.docs.upsert(collectionName, doc))
      //TODO Make this synchronous after upsert
      this.docModalClose(doc._id || 'new' + this.collectionName)
    },
    //Would be a good place for any entire dataset searches
  }
}

export {MasterDetailsContainer}

export default connect(mapStateToProps,mapDispatchToProps)(MasterDetailsContainer)

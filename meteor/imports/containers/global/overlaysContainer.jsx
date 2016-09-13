import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import Overlays from '../../components/global/overlays'

const OverlaysContainer = React.createClass({
  render() {
    return (
      <Overlays overlays={this.props.overlays} />
    )
  }
})

var mapStateToProps = function(state) {
  return {
    overlays: state.overlays
  }
}

var mapDispatchToProps = function(dispatch) {
	return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(OverlaysContainer)

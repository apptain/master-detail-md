import React from 'react'
import Modal from '../modal'
import Form from '../form'

const EditLinkAg = React.createClass({
  handleClick(e, data) {
  	this.props.params.node.setSelected(true)
  	this.props.params.node.setSelected(false)
	},
  render() {
    return (
      <a
        key={this.props.params.data._id}
        onClick={this.handleClick}
      >Edit</a>
    )
  }
})

export default EditLinkAg

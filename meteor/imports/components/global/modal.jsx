import React, {PropTypes} from 'react'
import Animate from './animate'

const Modal = React.createClass({
  propTypes: {
		id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  },
  close(e) {
    this.props.onClose(this.props.id)
  },
  render: function() {
    return (
      <div className="window-wrap">
        <div className="window-dialog">
          <div className="window-header">
            <div className='modal-close' onClick={this.close}>
              <i aria-hidden="true">x</i>
            </div>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
          <div className="window-footer">
          </div>
        </div>
      </div>
    )
  }
})

export default Modal

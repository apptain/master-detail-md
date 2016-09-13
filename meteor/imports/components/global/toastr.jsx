import React, {Component, PropTypes} from 'react'
import toastr from 'toastr'
import "toastr/build/toastr.css"

class Toastr extends Component {
  render() {
    return (
      <div></div>
    )
  }
  componentWillReceiveProps(props) {
    if (props.notification) {
      if (props.notification.message) {
        //TODO move to Component Initialized
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-bottom-full-width",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
        console.log('notification')
        toastr[props.notification.type](props.notification.message)
      }
    }
  }
}

Toastr.propTypes = {
  notification: React.PropTypes.object
}

export default Toastr

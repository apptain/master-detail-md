import Velocity from 'velocity-animate'
import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

const Animate = React.createClass({
  propTypes: {
    transition: PropTypes.string,
    duration: PropTypes.number,
    children: PropTypes.node
  },
  getDefaultProps() {
    return {
      transition: 'slideUpIn',
      duration: 400
    }
  },
  componentDidMount() {
    const dom = findDOMNode(this)
    const transition = 'transition.' + this.props.transition
    // Velocity(dom, transition, {
    //   duration: this.props.duration,
    //   display: null
    // })
  },
  render() {
    return this.props.children
  }
})

export default Animate

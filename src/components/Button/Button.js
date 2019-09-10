import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
  static propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
  }

  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent()
    }
  }

  render() {
    const { buttonText, emitEvent } = this.props
    return (
      <button test-attr='button-component' onClick={() => this.submitEvent()}>
        {buttonText}
      </button>
    )
  }
}

export default Button

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Headline extends Component {
  static propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string
    /**
      arrayOfMulitpleTypes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        key:PropTpes.number,
      }))
   */
  }

  render() {
    const { header, desc } = this.props

    if (!header) return null

    return (
      <div test-attr='headline'>
        <h1 test-attr='header'>{header}</h1>
        <h4 test-attr='desc'>{desc}</h4>
      </div>
    )
  }
}

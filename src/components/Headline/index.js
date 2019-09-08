import React, { Component } from 'react'

export default class index extends Component {
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

import React from 'react'
import PropTypes from 'prop-types'

import './ListItem.scss'

const ListItem = ({ title, desc }) => {
  if (!title) return null

  return (
    <div test-attr='list-item-component' className='list-item-component'>
      <h2 test-attr='component-title'>{title}</h2>
      <p test-attr='component-desc'>{desc}</p>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ListItem

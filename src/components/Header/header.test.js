import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../utils'

import Header from './'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Header {...props} />)

describe('<Header />', () => {
  let component
  beforeEach(() => (component = setUp()))

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header-component')
    expect(wrapper.length).toBe(1)
  })

  it('should render a single image', () => {
    const wrapper = component.find('img')
    expect(wrapper.length).toBe(1)
  })
})

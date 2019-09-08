import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { findByTestAttr, CONSTANTS } from '../../utils'

import Headline from './'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Headline {...props} />)

describe('<Headline />', () => {
  describe('WITH props', () => {
    let component
    beforeEach(() => {
      const props = {
        header: CONSTANTS.TEST_STR,
        desc: CONSTANTS.TEST_STR
      }
      component = setUp(props)
    })

    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'headline')
      expect(wrapper.length).toBe(1)
    })

    it('should render a title', () => {
      const h1 = findByTestAttr(component, 'headline')
      expect(h1.length).toBe(1)
    })

    it('should render a description', () => {
      const h4 = findByTestAttr(component, 'headline')
      expect(h4.length).toBe(1)
    })
  })

  describe('WITHOUT props', () => {
    let component
    beforeEach(() => (component = setUp()))

    it('should NOT render', () => {
      const wrapper = findByTestAttr(component, 'headline')
      expect(wrapper.length).toBe(0)
    })
  })
})

// @56min

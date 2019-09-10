import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CONSTANTS, checkProps, findByTestAttr } from '../../utils'

import ListItem from './ListItem'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<ListItem {...props} />)

describe('<ListItem />', () => {
  describe('checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        title: CONSTANTS.TEST_STR,
        desc: CONSTANTS.TEST_STR
      }
      expect(checkProps(ListItem, expectedProps)).toBeUndefined()
    })
  })

  describe('check that component renders', () => {
    let shallowComponent
    beforeEach(() => {
      const props = {
        title: CONSTANTS.TEST_STR,
        desc: CONSTANTS.TEST_STR
      }
      shallowComponent = setUp(props)
    })

    it('should render without error', () => {
      const component = findByTestAttr(shallowComponent, 'list-item-component')
      expect(component.length).toBe(1)
    })

    it('should render a title', () => {
      const title = findByTestAttr(shallowComponent, 'component-title')
      expect(title.length).toBe(1)
    })

    it('should render a description', () => {
      const desc = findByTestAttr(shallowComponent, 'component-desc')
      expect(desc.length).toBe(1)
    })
  })

  describe('should NOT render', () => {
    let shallowComponent
    beforeEach(() => {
      const props = {
        desc: CONSTANTS.TEST_STR
      }
      shallowComponent = setUp(props)
    })

    it('should NOT be rendered with no title', () => {
      const component = findByTestAttr(shallowComponent, 'list-item-component')
      expect(component.length).toBe(0)
    })
  })
})

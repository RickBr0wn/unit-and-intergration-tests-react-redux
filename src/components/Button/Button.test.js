import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CONSTANTS, checkProps, findByTestAttr } from '../../utils'

import Button from './Button'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Button {...props} />)

describe('<Button />', () => {
  describe('checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      }
      const propsError = checkProps(Button, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('renders', () => {
    let wrapper
    beforeEach(() => {
      const expectedProps = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      }
      wrapper = setUp(expectedProps)
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'button-component')
      expect(button.length).toBe(1)
    })
  })
})

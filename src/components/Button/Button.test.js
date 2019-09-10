import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CONSTANTS, checkProps, findByTestAttr } from '../../utils'

import Button from './Button'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Button {...props} />)

describe('<Button />', () => {
  describe('checking propTypes', () => {
    it('should not thrown a warning', () => {
      const expectedProps = {
        text: CONSTANTS.TEST_STR,
        onClickFn: CONSTANTS.TEST_FUNC
      }
      expect(checkProps(Button, expectedProps)).toBeUndefined()
    })

    describe('renders correctly', () => {
      let shallowComponent
      beforeEach(() => {
        const props = {
          text: CONSTANTS.TEST_STR,
          onClickFn: CONSTANTS.TEST_FUNC
        }
        shallowComponent = setUp(props)
      })

      it('should render a button', () => {
        const component = findByTestAttr(shallowComponent, 'button-component')
        expect(component.length).toBe(1)
      })
    })
  })
})

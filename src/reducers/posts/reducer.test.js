import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CONSTANTS, TYPES } from '../../utils'

import reducer from './reducer'

configure({ adapter: new Adapter() })

describe('posts reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('should return new state if recieving type', () => {
    const initialState = [
      { title: CONSTANTS.TEST_STR },
      { title: CONSTANTS.TEST_STR },
      { title: CONSTANTS.TEST_STR }
    ]

    const newState = reducer(undefined, {
      type: TYPES.GET_POSTS,
      payload: initialState
    })

    expect(newState).toEqual(initialState)
  })
})

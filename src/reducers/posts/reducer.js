import { TYPES } from '../../utils'

export default (state = [], { type, payload }) => {
  console.log(TYPES)
  switch (type) {
    case TYPES.GET_POSTS:
      return payload
    default:
      return state
  }
}

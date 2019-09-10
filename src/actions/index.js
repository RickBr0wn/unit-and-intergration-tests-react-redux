import axios from 'axios'

import { TYPES } from '../utils'

export const fetchPosts = () => async dispatch => {
  await axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response =>
      dispatch({ type: TYPES.GET_POSTS, payload: response.data })
    )
    .catch(err => console.log(err))
}

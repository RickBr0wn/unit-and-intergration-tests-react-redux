import checkPropTypes from 'check-prop-types'

export const checkProps = (component, expectedProps) =>
  // eslint-disable-next-line react/forbid-foreign-prop-types
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)

export const findByTestAttr = (component, attr) =>
  component.find(`[test-attr='${attr}']`)

export const CONSTANTS = {
  TEST_STR: 'TEST_STR',
  TEST_NUM: 42,
  TEST_BOOL: true,
  TEST_OBJ: {},
  TEST_FUNC: () => {}
}

export const TYPES = {
  GET_POSTS: 'GET_POSTS'
}

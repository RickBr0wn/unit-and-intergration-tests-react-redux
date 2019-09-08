export const findByTestAttr = (component, attr) =>
  component.find(`[test-attr='${attr}']`)

export const CONSTANTS = {
  TEST_STR: 'TEST_STR',
  TEST_NUM: 42,
  TEST_BOOL: true,
  TEST_OBJ: {},
  TEST_FUNC: () => {}
}

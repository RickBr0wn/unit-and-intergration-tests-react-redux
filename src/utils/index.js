export const findByTestAttr = (component, attr) =>
  component.find(`[test-attr='${attr}']`)

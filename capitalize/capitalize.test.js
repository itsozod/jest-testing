const capitalize = require('./capitalize');

test('The string "ozod" should be converted to "Ozod"', () => {
  expect(capitalize('ozod')).toBe('Ozod');
});
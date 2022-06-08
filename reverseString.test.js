const reverseString = require('./src/reverseString.js');

test('checking if string is reversed', () => {
  const str = 'amos';
  expect(reverseString(str)).toBe('soma');
});
// const reverseString = (str) => {
//   const reversedStr = str.split('').reverse().join('');
//   return reversedStr;
// };

const reverseString = str => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

module.exports = reverseString;
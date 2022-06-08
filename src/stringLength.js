const strLength = str => {
  if (str.length < 1 && str.length < 10) {
    throw Error(`${str} is too short or too long`);
  }
  const length = str.split('').length;
  return length;
};

module.exports = strLength;
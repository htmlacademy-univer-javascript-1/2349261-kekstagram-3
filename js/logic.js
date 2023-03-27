function random(min, max) {
  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return -1;
  }
}

function numberOfChars(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  else
  {
    return false;
  }
}

numberOfChars('I love js dasdadadad', 21);

export {random, numberOfChars};

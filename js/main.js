function random(min, max) {
  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return -1;
  }
}
random(0, 112);

function numberOfChars(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  else
  {
    return false;
  }
}

numberOfChars('Я люлбю jsasdasddas', 20);

function random(min, max) {
  if (min <= max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else console.log("Min должен быть меньше max");
}
random(0, 112);

function numberOfChars(str, maxLength) {
  if (str.length <= maxLength) {
    console.log(str.length);
    return true;
  }
  else return false
}

numberOfChars("Я люлбю jsasdasddas", 20);

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

function arrayOfPhotos() {
  const resultArray = new Array(25);
  for (let i = 0; i < resultArray.length; i++) {
      resultArray[i] = (
        {
            id: i + 1,
            url: `photos/${i+1}.png`,
            description:'море',
            likes: random(15,200),
            comments: random(0, 200)
        }
      );
  }
  return resultArray;
}

arrayOfPhotos();

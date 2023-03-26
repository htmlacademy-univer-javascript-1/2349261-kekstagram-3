import {random, numberOfChars} from './logic.js';
import './data.js'

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

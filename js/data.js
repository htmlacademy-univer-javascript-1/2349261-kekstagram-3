import { random } from './util.js';

const arrayOfPhotos = function(){
  const result =[];
  for (let i = 0; i <=24; i++){
    result.push(
      {
        id: i+1,
        url: 'photos/'.concat(i+1, '.jpg'),
        description: '',
        likes: random(15,200),
        comments: random(0,200)
      }
    );
    return result;
  }
};

export{
  arrayOfPhotos
};

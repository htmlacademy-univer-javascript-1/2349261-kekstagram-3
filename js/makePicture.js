import { arrayOfPhotos } from './data.js';


const miniaturesFragment = document.createDocumentFragment();


const miniaturesList = document.querySelector('.pictures');
const miniaturesTemp = document.querySelector('#picture').content;

const simularMiniatures = arrayOfPhotos;
simularMiniatures.forEach(({url, likes, comments})=>{
  const miniatures = miniaturesTemp.cloneNode(true);
  miniatures.querySelector('.picture__img').src = url;
  miniatures.querySelector('.picture__likes').textContent=likes;
  miniatures.querySelector('.picture__comments').textContent=comments.length;
  miniaturesFragment.appendChild(miniatures);
});
miniaturesList.appendChild(miniaturesFragment);

//module7-task2

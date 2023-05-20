import { getData } from './api.js';
import { serverError } from './alerts.js';
import {renderPhotos} from './render-photos.js'
import './editor.js';
import { showSortButtons, onSortButtonClick } from './sort-photo.js';

getData((photos) => {
  renderPhotos(photos);
  showSortButtons();
  onSortButtonClick(photos);
}, serverError);


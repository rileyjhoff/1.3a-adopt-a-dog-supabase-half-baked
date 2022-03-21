import { getDogs, getDog } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

getDogs();
getDog(1);
getDog(2);
getDog(3);
getDog(4);
getDog(5);
getDog(6);


// on load
// fetch all dogs
// render and append all dog cards to the container

import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');
const dogName = document.getElementById('dog-name');

// on load
window.addEventListener('load', async() => {
    // get the id from URL
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    // use the id to fetch the dog
    const dog = await getDog(id);
    // changing page title to the dog's name
    dogName.textContent = `${dog.name}`;
    // render and append this dog's details to the container
    const dogDetail = renderDogDetail(dog);

    dogDetailContainer.append(dogDetail);
});

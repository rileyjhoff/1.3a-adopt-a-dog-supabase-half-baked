import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const dogSearch = document.getElementById('dog-search');

// on load
window.addEventListener('load', async() => {
    // fetch all dogs
    const dogs = await getDogs();
    // render and append all dog cards to the container
    for (let dog of dogs) {
        const dogCard = renderDogCard(dog);

        dogListContainer.append(dogCard);
    }
});

dogSearch.addEventListener('input', async() => {
    const dogs = await getDogs();
    if (dogSearch.value !== '') {
        for (let dog of dogs) {
            dogListContainer.textContent = '';
            // const lowerCaseName = dog.name.toLowerCase();
            if (dog.name.startsWith(dogSearch.value)) {
                const dogCard = renderDogCard(dog);

                dogListContainer.append(dogCard);
            }
        }
    }
    if (dogSearch.value === '') {
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const dogCard = renderDogCard(dog);
    
            dogListContainer.append(dogCard);
        }
    }
});
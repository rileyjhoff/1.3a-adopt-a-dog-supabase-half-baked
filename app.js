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
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const lowerCaseName = dog.name.toLowerCase();
            const lowerCaseSearch = dogSearch.value.toLowerCase();
            if (lowerCaseName.startsWith(lowerCaseSearch) || lowerCaseName.includes(lowerCaseSearch)) {
                const dogCard = renderDogCard(dog);

                dogListContainer.append(dogCard);
            }
        }
    } else {
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const dogCard = renderDogCard(dog);
    
            dogListContainer.append(dogCard);
        }
    }
});
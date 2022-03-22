import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const dogNameSearch = document.getElementById('dog-name-search');
const dogBreedSearch = document.getElementById('dog-breed-search');

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

dogNameSearch.addEventListener('input', async() => {
    const dogs = await getDogs();
    if (dogNameSearch.value !== '') {
        dogBreedSearch.disabled = true;
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const dogName = dog.name.toLowerCase();
            const search = dogNameSearch.value.toLowerCase();
            if (dogName.startsWith(search) || dogName.includes(search)) {
                const dogCard = renderDogCard(dog);

                dogListContainer.append(dogCard);
            }
        }
    } else {
        dogBreedSearch.disabled = false;
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const dogCard = renderDogCard(dog);
    
            dogListContainer.append(dogCard);
        }
    }
});

dogBreedSearch.addEventListener('input', async() => {
    const dogs = await getDogs();
    if (dogBreedSearch.value !== '') {
        dogNameSearch.disabled = true;
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const dogBreed = dog.breed.toLowerCase();
            const search = dogBreedSearch.value.toLowerCase();
            if (dogBreed.startsWith(search) || dogBreed.includes(search)) {
                const dogCard = renderDogCard(dog);

                dogListContainer.append(dogCard);
            }
        }
    } else {
        dogNameSearch.disabled = false;
        dogListContainer.textContent = '';
        for (let dog of dogs) {
            const dogCard = renderDogCard(dog);
    
            dogListContainer.append(dogCard);
        }
    }
});

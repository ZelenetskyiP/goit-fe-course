'use strict'




const movie = document.createElement('div')
movie.classList.add('movie')


const img = document.createElement('img');
img.classList.add('movie__image');
img.setAttribute('alt', 'movie image');
img.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');

const movieBody  = document.createElement('div');
movieBody.classList.add('movie__body');

const h2 = document.createElement('h2');
h2.classList.add('movie__title');
h2.textContent = 'The Godfather';

const pText = document.createElement('p');
pText.classList.add('movie__description');
pText.textContent = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";

 
const pData = document.createElement('p');
pData.classList.add('movie__date');
pData.textContent = 'Released: 1972-03-14';

const pRating = document.createElement('p');
pRating.classList.add('movie__rating');
pRating.textContent = 'Rating: 8.6';


movie.prepend(img, movieBody);
movieBody.prepend(h2, pText, pData, pRating);



console.log(movie)



// Joke container variables
let jokeTxt = document.getElementById('joke-container');
let jokeBtn = document.getElementById('generate-joke-btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeTxt.textContent = `${item.joke}`;
    });
}

jokeBtn.addEventListener('click', getJoke);

getJoke();
const jokeEl = document.getElementById('joke');
const get_btn = document.getElementById('get_btn');

get_btn.addEventListener('click', generateJoke);

async function generateJoke(){
    const jokeRes = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    });

    const joke = await jokeRes.json();

    jokeEl.innerHTML = joke.joke;
}
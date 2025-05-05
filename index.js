const btnE1 = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")

const apiKey = "d3pTnAOEGnurKBgMX1VjZw==8thIUy7N7BXMTrwH";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey, 
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes"
async function getJoke(){

    jokeE1.innerText = "Updating...";
    btnE1.disabled = true;
    btnE1.innerText = "Loading...";

    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnE1.disabled = false;
    btnE1.innerText = "Tell Me A Joke!";

    jokeE1.innerText = data[0].joke;
}

btnE1.addEventListener("click", getJoke)
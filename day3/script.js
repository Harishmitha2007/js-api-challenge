const jokeBtn = document.getElementById("jokeBtn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

async function getJoke() {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const joke = await response.json();

        setup.textContent = joke.setup;
        punchline.textContent = joke.punchline;
    } catch (error) {
        setup.textContent = "Failed to load joke.";
        punchline.textContent = "";
        console.error(error);
    }
}

jokeBtn.addEventListener("click", getJoke);
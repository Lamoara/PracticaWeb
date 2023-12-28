const NUM_RESULTS = 4;
let loadMoreRequests = 0;

async function loadMore(from, to, genero) {
    const response = await fetch(`/moreGames?from=${from}&to=${to}&genero=${genero}`);
    const newGames = await response.text();

    const gameDiv = document.getElementById("extraGames");
    gameDiv.innerHTML = newGames;
}

function filtra() {
    let genero = document.getElementById('filter-button').value;
    loadMore(0, 8, genero);
}

// checkUsernameAvailability() funcion de prueba
async function checkUsernameAvailability() {

    let usernameInput = document.getElementById('username');

    let username = usernameInput.value;

    const response = await fetch(`/availableUsername?username=${username}`);

    const responseObj = await response.json();

    let message = responseObj.available ? `
    <p>Disponible</p>` :
        '<p>No disponible</p>';

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
}
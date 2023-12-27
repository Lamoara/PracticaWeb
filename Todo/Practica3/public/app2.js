const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/moreGames?from=${from}&to=${to}`);

    const newGame = await response.text();

    const gameDiv = document.getElementById("extraGames");

    gameDiv.innerHTML += newGame;

    loadMoreRequests++;
}


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

function filtra() {

    let genero = document.getElementById('filter-button').value;

    let content = document.getElementById('content');
    content.innerHTML += '<p>Hola '+genero+'!</p>';
}
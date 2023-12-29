const NUM_RESULTS = 4;
let loadMoreRequests = 0;

async function loadMore(from, to, genero) {
    const response = await fetch(`/moreGames?from=${from}&to=${to}&genero=${genero}`);
    const newGames = await response.text();

    const gameDiv = document.getElementById("extraGames");

    if (from === 0) {
        gameDiv.innerHTML = "";
    }

    gameDiv.insertAdjacentHTML('beforeend', newGames);
}

function filtra() {
    const genero = document.getElementById('filter-button').value;
    const gameDiv = document.getElementById("extraGames");
    loadMoreRequests = 0;

    gameDiv.innerHTML = "";

    loadMore(loadMoreRequests * NUM_RESULTS, (loadMoreRequests + 1) * NUM_RESULTS, genero);
    loadMoreRequests++;
}

function loadMoreOnClick() {
    const from = loadMoreRequests * NUM_RESULTS;
    const to = from + NUM_RESULTS;
    let genero = document.getElementById('filter-button').value;

    loadMore(from, to, genero);
    loadMoreRequests++;
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

async function addfavorito(){
    const urlFragment = window.location.pathname; // Esto devolverá "/post/0" en tu ejemplo
    const elementoId = parseInt(urlFragment.split('/').pop(), 10); // Obtener el último segmento como entero
    const response = await fetch('/addfavorito?id=$(elementoid)');
    const element=await response.json();
    const ul=document.getElementById("favs");
    ul.innerHTML = element;
    alert("Se ha agregado correctamente");
    
    
}
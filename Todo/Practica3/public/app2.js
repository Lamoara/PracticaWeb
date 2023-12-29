const NUM_RESULTS = 4;
let loadMoreRequests = 0;

const onScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight >= document.documentElement.scrollHeight - 400) {
        loadMoreOnClick();
        console.log("Load")
    }
}

window.addEventListener('scroll', onScroll)

const onScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight >= document.documentElement.scrollHeight - 400) {
        loadMoreOnClick();
        console.log("Load")
    }
}

window.addEventListener('scroll', onScroll)

async function loadMore(from, to, genero, nameInput) {
    const response = await fetch(`/moreGames?from=${from}&to=${to}&genero=${genero}&nameInput=${nameInput}`);
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

function search() {

    let nameInput = document.getElementById('name').value;
    const gameDiv = document.getElementById("extraGames");

    loadMoreRequests = 0;
    gameDiv.innerHTML = "";

    loadMore(loadMoreRequests * NUM_RESULTS, (loadMoreRequests + 1) * NUM_RESULTS, genero,nameInput);
    loadMoreRequests++;
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
const NUM_RESULTS = 4;
let loadMoreRequests = 0;

const onScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight * 2 >= document.documentElement.scrollHeight) {
        loadMoreOnClick();
    }
}

//window.addEventListener('scroll', onScroll)

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

function searchName() {
    const nameInput = document.getElementById('name').value;

    fetch(`/searchGames?nameInput=${nameInput}`)
        .then(response => response.json())
        .then(data => {
            const gameDiv = document.getElementById("extraGames");
            
            gameDiv.innerHTML = "";

            gameDiv.insertAdjacentHTML('beforeend', generateGameHTML(data.posts));
        })
        .catch(error => {
            console.error('Error en la solicitud AJAX:', error);
        });
}

function generateGameHTML(games) {
    if (!games || games.length === 0) {
        return '<p>No se encontraron resultados</p>';
    }
    let htmlString = '<div class="row">';

    games.forEach(game => {
        htmlString += `
            <div class="col-lg-3 col-md-6">
                <a href="post/${game.id}" class="decoration">
                    <image class="img-responsive" src="${game.image}"></image>
                    <p class="GameName">${game.name}</p>
                </a>
            </div>
        `;
    });

    htmlString += '</div>';

    return htmlString;
}

let favoritos = JSON.parse(sessionStorage.getItem('favoritos')) || [];
let cont = sessionStorage.getItem('cont') || 0;
let conf = sessionStorage.getItem('conf') === 'true' || true; // Se establecerá a true si no existe en localStorage

async function añadir(){
    const urlFragment = window.location.pathname; // Esto devolverá "/post/0" en tu ejemplo
    const elementoId = parseInt(urlFragment.split('/').pop(), 10); // Obtener el último segmento como entero
    if (conf){
        favoritos.push(elementoId);
        cont++;
        // Almacenar favoritos, cont y conf actualizados en localStorage
       sessionStorage.setItem('favoritos', JSON.stringify(favoritos));
        sessionStorage.setItem('cont', cont);
        sessionStorage.setItem('conf', conf);
        const nuevop = document.createElement("p");
        nuevop.textContent = 'añadido a favoritos';
        const div = document.getElementById("mensaje");
        div.appendChild(nuevop);
        conf = false;
    }
     else if (favoritos.includes(elementoId)) {
        alert('Ya has añadido este juego a tus favoritos');
}
}

async function showfavorites() {

     const modal = document.createElement('div');
     modal.className = 'modal';
     modal.innerHTML = `
         <div class="modal-content">
             <span class="cerrar-modal" onclick="cerrarModal()">&times;</span>
             <h2>Lista de Favoritos</h2>
             <div id="favoritos-container"></div>
         </div>
     `;
     const favoritosContainer = modal.querySelector('#favoritos-container');
     
     favoritos.forEach(favorito => {
        const pElement = document.createElement('p');
        pElement.textContent = favorito.nombre; // Ajusta esta propiedad según la estructura de tus elementos
        favoritosContainer.appendChild(pElement);
    });   

    document.body.appendChild(modal);

    }

    function cerrarModal() {
        // Remover el modal al cerrar
        const modal = document.querySelector('.modal');
        modal.parentNode.removeChild(modal);
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Otros códigos de inicialización si es necesario
    
        // Evento: Cuando se hace clic en el botón para mostrar favoritos
        const mostrarFavoritosBtn = document.getElementById('botonfavoritos');
        if (mostrarFavoritosBtn) {
            mostrarFavoritosBtn.addEventListener('click', mostrarFavoritos);
        }
    });
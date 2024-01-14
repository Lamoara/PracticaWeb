const NUM_RESULTS = 4;
let loadMoreRequests = 0;
let a = 0;

fetch(`/searchGames?nameInput= `)
    .then(response => response.json())
    .then(data => {
        currentGames = data.posts;
    }
    );

const onScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight * 2 >= document.documentElement.scrollHeight) {
        if(window.location.href.pathname == undefined)
            loadMoreOnClick();
    }
}

window.addEventListener('scroll', onScroll)

async function loadMore(from, to, genero) {
    const response = await fetch(`/moreGames?from=${from}&to=${to}&genero=${genero}`);
    const newGames = await response.text();

    let gameDiv;

    if (a === 1) {
        gameDiv = currentGames;
    } else {
        gameDiv = document.getElementById("extraGames");
    }

    if (from === 0) {
        gameDiv.innerHTML = "";
    }

    gameDiv.insertAdjacentHTML('beforeend', newGames);
}

function filtra() {
    const genero = document.getElementById('filter-button').value;
    const gameDiv = document.getElementById("extraGames");
    let filteredGames;

    if (genero !== "No seleccionado") {
        if (Array.isArray(currentGames)) {
            filteredGames = currentGames.filter(game => game.genero === genero);
        } else {
            filteredGames = currentGames;
        }
    } else {
        filteredGames = currentGames;
    }

    gameDiv.innerHTML = "";
    gameDiv.insertAdjacentHTML('beforeend', generateGameHTML(filteredGames));
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
    a = 1;

    fetch(`/searchGames?nameInput=${nameInput}`)
        .then(response => response.json())
        .then(data => {
            currentGames = data.posts;
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

async function añadir() {
    const urlFragment = window.location.pathname; // Esto devolverá "/post/0" en tu ejemplo
    const elementoId = parseInt(urlFragment.split('/').pop(), 10); // Obtener el último segmento como entero

    if (favoritos.includes(elementoId)) {
        //alert('has añadido este juego a tus favoritos');
        let indicador = favoritos.indexOf(elementoId);
        favoritos.splice(indicador, 1);
        sessionStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert('has eliminado este juego de tus favoritos');

    }
    else if (favoritos.includes(elementoId) === false) {
        favoritos.push(elementoId);
        // Almacenar favoritos en localStorage
        sessionStorage.setItem('favoritos', JSON.stringify(favoritos));
        /* const nuevop = document.createElement("p");
         nuevop.textContent = 'añadido a favoritos';
         const div = document.getElementById("mensaje");
         div.appendChild(nuevop);*/
        alert('has añadido este juego a tus favoritos');
    }

}


let primeravez = sessionStorage.getItem('conf') === false || true;
let longaux = sessionStorage.getItem('longaux') || 0;
let longaux2 = sessionStorage.getItem('longaux2') || 0;
async function addlista() {
    //tengo el array con los valores en la sesion, le hago un for del tamaño del array
    if (primeravez) {
        longaux = favoritos.length;
        sessionStorage.setItem('longaux', longaux);
        for (let i = 0; i <= favoritos.length - 1; i++) {
            let elementoId = favoritos[i];
            const respelement = await fetch(`/addfavorito?elementoId=${elementoId}`);
            const data = await respelement.text();
            const lista = document.getElementById("lista-favoritos");
            lista.innerHTML += data;
        }
        primeravez = false;
        sessionStorage.setItem('primeravez', primeravez);
        console.log(favoritos);
    }
    else {
        longaux2 = favoritos.length;
        sessionStorage.setItem('longaux2', longaux2);
        if (longaux < longaux2) {
            let cont = Math.abs(longaux2 - longaux);
            let m = longaux + 1;
            for (let j = 1; j <= cont; j++) {
                let ident = favoritos[m];
                const respelement = await fetch(`/addfavorito?elementoId=${elementoId}`);
                const data = await respelement.text();//ya tengo el html 
                const lista = document.getElementById("lista-favoritos");
                lista.innerHTML += data;
                m = m + 1;
            }
            longaux = longaux2;//la longitud del array inicial se pone al valor del 2, asi el 2 a la próxima tiene un nuevo valor
            sessionStorage.setItem('longaux', longaux);
        }

    }
}

let visible = sessionStorage.getItem('visible') === true || false;

function showtab() {
    addlista();
    const boton = document.getElementById("botonfavoritos");
    const favoritolist = document.getElementById("favoritolist");
    const cerrarlista = document.getElementById("cerrarlista");
    boton.addEventListener('click', function () {
        if (visible === false) {
            favoritolist.style.right = '0';
            visible = true;
            sessionStorage.setItem('visible', visible);
        }
        else {
            favoritolist.style.right = '-300px';
            visible = false;
            sessionStorage.setItem('visible', visible);
        }
    });

    cerrarlista.addEventListener('click', function () {
        favoritolist.style.right = '-300px';
        visible = false;
        sessionStorage.setItem('visible', visible);
    });

}

async function showfavorites() {

    const response = await fetch('/addfavorito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favoritos }),
    });
    const resultado = await response.json();
    const ul = document.getElementById("lista-favoritos");
    ul.innerHTML = '';
    for (let i = 0; i <= favoritos.length; i++) {
        let post = resultado.get(favoritos[i]);
        // elementos.push(post);
        //sessionStorage.setItem('elementos', JSON.stringify(elementos));
        let li = document.createElement("li");
        li.textContent = post.name;
        console.log(post.name);
        ul.appendChild(li);
    }
}

window.onload = function(){
    reset();
};

function reset()
{
    loadMoreRequests = 0;
}

async function loadMoreCommentsClick()
{
    const from = loadMoreRequests * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    
}
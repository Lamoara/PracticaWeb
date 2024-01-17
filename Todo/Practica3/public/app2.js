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
        if(window.location.pathname == "/")
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
let contador = sessionStorage.getItem('contador') || 0;

async function añadir() {
    const urlFragment = window.location.pathname; // Esto devolverá "/post/0" en tu ejemplo
    const elementoId = parseInt(urlFragment.split('/').pop(), 10); // Obtener el último segmento como entero

    if (favoritos.includes(elementoId)) {
        //alert('has añadido este juego a tus favoritos');
        let indicador = favoritos.indexOf(elementoId);
        favoritos.splice(indicador, 1);
        sessionStorage.setItem("favoritos", JSON.stringify(favoritos));
        contador=favoritos.length;
        sessionStorage.setItem("contador", contador);//actualizamos el contador=longitud del array
        alert('has eliminado este juego de tus favoritos');

    }
    else if (favoritos.includes(elementoId) === false) {
        favoritos.push(elementoId);
        // Almacenar favoritos en localStorage
        sessionStorage.setItem('favoritos', JSON.stringify(favoritos));
        contador=favoritos.length;
        sessionStorage.setItem("contador", contador);//actualizamos el contador 
        alert('has añadido este juego a tus favoritos');
    }

}


let primeravez = sessionStorage.getItem('conf') === false || true;
let longaux = sessionStorage.getItem('longaux') || 0;
let longaux2 = sessionStorage.getItem('longaux2') || 0;
async function addlista() {//para mostrar los elementos en la lista
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

function showtab() { //para mostrar la lista
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

    if(window.location.pathname == "/")
        {
            loadMoreOnClick();
            loadMoreOnClick();
            loadMoreOnClick();
            const contadorLista = document.getElementById('contlist');
            let cantidadElementos= contador;
            contadorLista.textContent = cantidadElementos;
        }
    if(window.location.pathname.includes("/post") && !window.location.pathname.includes("edit"))
    {
        loadMoreCommentsClick()
    }
};

function reset()
{
    loadMoreRequests = 0;
}

function loadMoreCommentsClick()
{
    const from = loadMoreRequests * NUM_RESULTS;
    const to = from + NUM_RESULTS;
    const urlFragment = window.location.pathname;
    const id = parseInt(urlFragment.split('/').pop());55
    loadMoreComments(from, to, id);
    loadMoreRequests += NUM_RESULTS;
}

async function loadMoreComments(from, to, id)
{
    const response = await fetch(`/moreComments?from=${from}&to=${to}&id=${id}`)
    const newComments = await response.text();

    let commentDiv = document.getElementById("comments");
    commentDiv.innerHTML += newComments;
}

async function commentClick()
{
    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("name").value;
    let reseña = document.getElementById("text").value;
    
    // Obtener el valor de la valoración
    let valoracion = document.querySelector('input[name="estrellas"]:checked');
    let valoracionValue = valoracion ? valoracion.value : 'No seleccionado';

    // Puedes hacer algo con los valores, por ejemplo, imprimirlos en la consola
    console.log("Nombre:", nombre);
    console.log("Reseña:", reseña);
    console.log("Valoración:", valoracionValue);

    const response = await fetch(`/comment`)
    const newComments = await response.text()

    let commentDiv = document.getElementById("comments");
    commentDiv.innerHTML += newComments;
}

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
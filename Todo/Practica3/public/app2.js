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
//let cont = sessionStorage.getItem('cont') || 0;
//let conf = sessionStorage.getItem('conf') === 'true' || true; // Se establecerá a true si no existe en localStorage

async function añadir(){
    const urlFragment = window.location.pathname; // Esto devolverá "/post/0" en tu ejemplo
    const elementoId = parseInt(urlFragment.split('/').pop(), 10); // Obtener el último segmento como entero
    
    if (favoritos.includes(elementoId))  {
       alert('Ya has añadido este juego a tus favoritos');
    }
    else if (favoritos.includes(elementoId)===false){
        favoritos.push(elementoId);
        //cont++;
        // Almacenar favoritos, cont y conf actualizados en localStorage
       sessionStorage.setItem('favoritos', JSON.stringify(favoritos));
       // sessionStorage.setItem('cont', cont);
       // sessionStorage.setItem('conf', conf);
        const nuevop = document.createElement("p");
        nuevop.textContent = 'añadido a favoritos';
        const div = document.getElementById("mensaje");
        div.appendChild(nuevop);

    const response = await fetch(`/addfavorito?elementoId=${elementoId}`);//le paso el valor del id
    const data = await response.text(); //este recibe el html
    const div1=document.getElementById("lista-favoritos"); //selecciona el div 
    div1.innerHTML+=data; //supuestamente le carga el html en el div
    }

    
}

let visible = sessionStorage.getItem('visible') === 'true' || false;

function showtab(){
    const boton= document.getElementById("botonfavoritos");
    const favoritolist=document.getElementById("favoritolist");
    const cerrarlista=document.getElementById("cerrarlista");
    if (visible){
        boton.addEventListener('click', function() {
            
            favoritolist.style.display = 'none';
        }); 
        visible=false;
    } else{
        boton.addEventListener('click', function() {
            favoritolist.style.display = 'block';
        }); 
        visible=true;
    }
    
    cerrarlista.addEventListener('click', function() {
        favoritolist.style.display = 'none';
    });
    
}

/*async function showfavorites(){

    const response = await fetch('/addfavorito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favoritos}),
    });
    const resultado = await response.json();
    const ul=document.getElementById("lista-favoritos");
    ul.innerHTML = '';
    for(let i=0;i<=favoritos.length;i++){
        let post=resultado.get(favoritos[i]);
       // elementos.push(post);
        //sessionStorage.setItem('elementos', JSON.stringify(elementos));
       let li=document.createElement("li");
        li.textContent=post.name;
        ul.appendChild(li);
    }
    
}*/


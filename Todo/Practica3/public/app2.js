const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
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
    <section>
        <div id="extraGames" class="container">
            <div class="row">
                {{#posts}}
                <div class="col-lg-3 col-md-6">
                    <a href="post/{{id}}" class="decoration">
                        <img class="img-responsive" src="{{image}}" alt="{{name}}">
                        <p class="GameName">{{name}}</p>
                    </a>
                </div>
                {{/posts}}
            </div>

            {{^posts}}
            <p>No posts yet.</p>
            {{/posts}}
            <br>
        </div>
    </section>
    <button id="buttonmore" onclick="loadMore()">Cargar más</button>` :
    '<p>No disponible</p>';

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
}
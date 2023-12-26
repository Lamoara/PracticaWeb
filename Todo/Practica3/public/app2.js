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
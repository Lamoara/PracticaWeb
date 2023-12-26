const Result_Numbres= 8;
let LoadMoreGames=0;
async function loadGames(){
    const from= (LoadMoreGames+1) * Result_Numbres; //desde el elemento 8 en un inicio

    const to = from + Result_Numbres; // hasta el elemento 16  si se le da al botón por 1ra vez

    const response = await fetch(`/moregames?from=${from}&to=${to}`); //se le envia una solicitud a /moregames y le envia 2 parametros
    
    const newGames= await response.text();// se transforma la respuesta en texto
    
    const gamesdiv= document.getElementById("moregames"); 
    
    gamesdiv.innerHTML+=newGames; //se carga el html en el apartado con el ID "moregames"
    
    LoadMoreGames++;
}
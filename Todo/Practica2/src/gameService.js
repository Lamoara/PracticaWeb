const posts = new Map();
let idVariable;
let nextId = 0;

addPost({
    name: "Red Dead Redemption 2", image: "/Imagenes_practica/RDR2.jpg", description: "Tras un asalto fallido en el pueblo de Blackwater, Arthur Morgan y la pandilla de Van der Linde se ven forzados a huir. Con agentes federales y los mejores cazarrecompensas pisando sus talones, la pandilla deberá asaltar, robar y hacerse camino a través de una América despiadada para poder sobrevivir. Mientras crecen las divisiones que amenazan con el fin de la pandilla Arthur debe decidir entre sus propios ideales y su lealtad a la pandilla que lo crió.",
    fecha: "2018-10-26", trailer: "https://www.youtube.com/embed/MyaYlbizpvs?si=VCBSoHWHA-EuwMwb", desarrolladora: "Rockstar", genero:"Aventura", ps: "tick", comments: [{ user: "Sebas", text: "Si", reviewValue: [,] }, { user: "Alberto", text: "No", reviewValue: [,,,,] }, { user: "Jorge", text: "Tambien", reviewValue: [,,,] }]
});

addPost({ name: "Factorio", image: "https://assetsio.reedpopcdn.com/co1tfy.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Factorio es un juego sobre la construcción y creación de fábricas automatizadas para producir elementos de complejidad creciente, dentro de un mundo 2D infinito. Usa tu imaginación para diseñar tu fábrica, combina elementos simples en estructuras ingeniosas y, finalmente, protégela de las criaturas a las que realmente no les agradas.",
 fecha: "2016-15-02", trailer: "https://www.youtube.com/embed/J8SBp4SyvLc?si=taNZWEW5IUAM-fQg", desarrolladora: "Wube Software LTD", genero: "Estrategia", comments :[{user: "Jorge", text:"Compré este juego hace mucho tiempo y no me ha decepcionado, una maravillosa experiencia. 10/10 Lo recomiendo.", reviewValue: [,,,,,]}]
 });
addPost({ name: "Call of Duty", image: "/Imagenes_practica/COD.jpeg", description: "Barata, barata" });
addPost({ name: "Grand theft auto V", image: "/Imagenes_practica/gtav.jpeg", description: "Pago bien" });
addPost({ name: "Mario Galaxy", image: "/Imagenes_practica/MarioGalaxy.jpg", description: "Barata, barata" });
addPost({ name: "God of War Ragnarok", image: "/Imagenes_practica/godofwar.jpeg", description: "Barata, barata" });
addPost({ name: "The last of us", image: "/Imagenes_practica/thelastofus.jpeg", description: "Pago bien" });
addPost({ name: "ARK", image: "/Imagenes_practica/ARK.jpeg", description: "Pago bien" });
addPost({ name: "Bloodborne", image: "/Imagenes_practica/Bloodborne.jpeg", description: "Pago bien" });
addPost({ name: "Hades", image: "/Imagenes_practica/Hades.jpeg", description: "Pago bien" });
addPost({ name: "Dantes Inferno", image: "/Imagenes_practica/dantes.jpeg", description: "Pago bien" });
addPost({ name: "Depprock", image: "/Imagenes_practica/depprock.jpeg", description: "Pago bien" });
addPost({ name: "EA Sports 24", image: "/Imagenes_practica/fifa24.jpeg", description: "Pago bien" });
addPost({ name: "Minecraft", image: "/Imagenes_practica/minecraft.jpeg", description: "Barata, barata" });
addPost({ name: "Mafia City", image: "/Imagenes_practica/mafiacity.jpeg", description: "Pago bien" });



export function addPost(post) {
    let id = nextId++; //se le suma 1 al id
    post.id = id.toString(); //al id del elemento post se le asigna el valor del "id" pero en string
    posts.set(post.id, post);// al mapa "posts" se le agrega el id de post(como etiqueta) y el propio elemento post
}

export function editPost(id, post) {
    post.id = id;
    let savedPost = posts.get(id);
    if (savedPost.comments) {
        post.comments = savedPost.comments;
    }
    posts.set(post.id, post);
}

export function saveId(id) {
    idVariable = id;
}

export function getId() {
    return idVariable;
}

export function deletePost(id) {
    posts.delete(id);
}

export function getPosts() {
    return [...posts.values()];
}

export function getPost(id) {
    return posts.get(id);
}

export function symbol(console) {
    if (console != "tick") {
        return "bi bi-x-lg";
    }

    else {
        return "bi bi-check2"
    }
}

export function symbolcolor(console) {
    if (console != "tick") {
        return "tick-red";
    }

    else {
        return "tick";
    }
}


export function addComment(postId, comment) {
    const post = posts.get(postId);
    if (post) {
        if (!post.comments) {
            post.comments = [];
        }
        post.comments.push(comment);
    }
}
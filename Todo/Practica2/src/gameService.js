const posts = new Map();
let idVariable;
let nextId = 0;

addPost({
    name: "Red Dead Redemption 2", image: "/Imagenes_practica/RDR2.jpg", description: "Tras un asalto fallido en el pueblo de Blackwater, Arthur Morgan y la pandilla de Van der Linde se ven forzados a huir. Con agentes federales y los mejores cazarrecompensas pisando sus talones, la pandilla deberá asaltar, robar y hacerse camino a través de una América despiadada para poder sobrevivir. Mientras crecen las divisiones que amenazan con el fin de la pandilla Arthur debe decidir entre sus propios ideales y su lealtad a la pandilla que lo crió.",
    fecha: "2018-10-26", trailer: "https://www.youtube.com/embed/MyaYlbizpvs?si=VCBSoHWHA-EuwMwb", desarrolladora: "Rockstar", ps: "tick", comments: [{ user: "Sebas", text: "Si", reviewValue: [,] }, { user: "Alberto", text: "No", reviewValue: [, , , ,] }, { user: "Jorge", text: "Tambien", reviewValue: [, , ,] }]
});
addPost({ name: "Factorio", image: "/Imagenes_practica/Factorio.jpeg", description: "Pago bien" });
addPost({ name: "Call of Duty", image: "/Imagenes_practica/COD.jpeg", description: "Barata, barata" });
addPost({ name: "Grand theft auto V", image: "/Imagenes_practica/gtav.jpeg", description: "Pago bien" });
addPost({ name: "Mario Galaxy", image: "/Imagenes_practica/MarioGalaxy.jpg", description: "Barata, barata" });
addPost({ name: "God of War Ragnarok", image: "/Imagenes_practica/godofwar.jpeg", description: "Barata, barata" });
addPost({ name: "The last of us", image: "/Imagenes_practica/thelastofus.jpeg", description: "Pago bien" });
addPost({ name: "ARK", image: "/Imagenes_practica/ARK.jpeg", description: "Pago bien" });
addPost({ name: "Bloodborne", image: "/Imagenes_practica/Bloodborne.jpeg", description: "Pago bien" });
addPost({ name: "Dantes Inferno", image: "/Imagenes_practica/dantes.jpeg", description: "Pago bien" });
addPost({ name: "Hades", image: "/Imagenes_practica/Hades.jpeg", description: "Pago bien" });
addPost({ name: "Depprock", image: "/Imagenes_practica/depprock.jpeg", description: "Pago bien" });
addPost({ name: "EA Sports 24", image: "/Imagenes_practica/fifa24.jpeg", description: "Pago bien" });
addPost({ name: "Minecraft", image: "/Imagenes_practica/minecraft.jpeg", description: "Barata, barata" });
addPost({ name: "Mafia City", image: "/Imagenes_practica/mafiacity.jpeg", description: "Pago bien" });



export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}

export function editPost(id, post) {
    post.id = id;
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


export function addComment(post, comment) {
    if (comment.user != null)
        post.comments.push(comment);
}
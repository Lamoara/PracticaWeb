const posts = new Map();
let idVariable;
let nextId = 0;

addPost({
    name: "Red Dead Redemption 2", image: "/Imagenes_practica/RDR2.jpg", description: "Tras un asalto fallido en el pueblo de Blackwater, Arthur Morgan y la pandilla de Van der Linde se ven forzados a huir. Con agentes federales y los mejores cazarrecompensas pisando sus talones, la pandilla deberá asaltar, robar y hacerse camino a través de una América despiadada para poder sobrevivir. Mientras crecen las divisiones que amenazan con el fin de la pandilla Arthur debe decidir entre sus propios ideales y su lealtad a la pandilla que lo crió.",
    fecha: "2018-10-26", trailer: "https://www.youtube.com/embed/MyaYlbizpvs?si=VCBSoHWHA-EuwMwb", desarrolladora: "Rockstar", genero:"Aventura", symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",symbolswitch:"bi bi-x-lg", nswitch:"tick-red", symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Sebas", text: "Si", reviewValue: [,] }, { user: "Alberto", text: "No", reviewValue: [,,,,] }, { user: "Jorge", text: "Tambien", reviewValue: [,,,] }]
});

addPost({ name: "Factorio", image: "https://assetsio.reedpopcdn.com/co1tfy.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Factorio es un juego sobre la construcción y creación de fábricas automatizadas para producir elementos de complejidad creciente, dentro de un mundo 2D infinito. Usa tu imaginación para diseñar tu fábrica, combina elementos simples en estructuras ingeniosas y, finalmente, protégela de las criaturas a las que realmente no les agradas.",
 fecha: "2016-15-02", trailer: "https://www.youtube.com/embed/J8SBp4SyvLc?si=taNZWEW5IUAM-fQg", desarrolladora: "Wube Software LTD", genero: "Estrategia", comments :[{user: "Jorge", text:"Compré este juego hace mucho tiempo y no me ha decepcionado, una maravillosa experiencia. 10/10 Lo recomiendo.", reviewValue: [,,,,,]}]
 });
addPost({ name: "Call of Duty", image: "/Imagenes_practica/COD.jpeg", description: "Barata, barata" });
addPost({ name: "Grand theft auto V", image: "/Imagenes_practica/gtav.jpeg", description: "Pago bien" });
addPost({ name: "Mario Galaxy", image: "/Imagenes_practica/MarioGalaxy.jpg", description: "Barata, barata" });
addPost({ name: "God of War Ragnarok", image: "/Imagenes_practica/godofwar.jpeg", description: "Barata, barata" });

addPost({ 
    name: "ARK", image: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg", description: "Juega como un hombre o una mujer desnudo, congelándote y muriéndote de hambre en una isla misteriosa. Debes cazar, cosechar, crear objetos, cultivar, y construir refugios para sobrevivir. Usa tu habilidad y astucia para matar, domesticar, criar y cabalgar dinosaurios y otras criaturas primitivas." ,
    fecha: "2015-06-02", trailer: "https://www.youtube.com/embed/FW9vsrPWujI?si=JFYjsxmCCG4nHdPs", desarrolladora: "Studio Wildcard, Instinct Games, Efecto Studios, Virtual Basement LLC", genero: "Supervivencia",
});

addPost({ 
    name: "Deep Rock Galactic", image: "https://i.3djuegos.com/juegos/14980/deep_rock_galactic/fotos/ficha/deep_rock_galactic-5166570.jpg", description: "Deep Rock Galactic es un shooter cooperativo de ciencia ficción en primera persona con enanos espaciales de armas tomar, entornos totalmente destruibles, cuevas generadas procedimentalmente y hordas interminables de monstruos alienígenas." ,
    fecha: "2020-05-13", trailer: "https://www.youtube.com/embed/2_GV33zBf3A?si=sJRjB8RmJMZyHCWl", desarrolladora: "Ghost Ship Games", genero: "Acción", comments: [{user: "Mecánico Pepe", text: "Mi amigo me obligo a comprarlo, jugue una partida pero como soy muy malo me da pereza jugarlo mas, de todas formas me lo pase muy bien. Buen juego", reviewValue: [,,,,]}]
    
});

addPost({
    name: "Minecraft", image: "https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png", description: "Minecraft es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
    trailer:"https://www.youtube.com/embed/MmB9b5njVbA?si=TBDghXWX6LTJ-ZFa"
});
addPost({ name: "Hades", image: "/Imagenes_practica/Hades.jpeg", description: "Pago bien" });

addPost({ name: "BloodBorne", image: "/Imagenes_practica/BloodBorne.jpeg", description: "Pago bien" });
addPost({ name: "The last of us", image: "/Imagenes_practica/thelastofus.jpeg", description: "Pago bien" });
addPost({ name: "Dantes Inferno", image: "/Imagenes_practica/dantes.jpeg", description: "Pago bien" });
addPost({ name: "EA Sports 24", image: "/Imagenes_practica/fifa24.jpeg", description: "Pago bien" });
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
    if (console) {
        return "bi bi-check2";
    }

    else {
        return "bi bi-x-lg";
    }
}

export function symbolcolor(console) {
    if (console != "checked") {
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
const posts = new Map();
let idVariable;
let nextId = 0;

addPost({
    name: "Red Dead Redemption 2", image: "https://i.blogs.es/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg", description: "Tras un asalto fallido en el pueblo de Blackwater, Arthur Morgan y la pandilla de Van der Linde se ven forzados a huir. Con agentes federales y los mejores cazarrecompensas pisando sus talones, la pandilla deberá asaltar, robar y hacerse camino a través de una América despiadada para poder sobrevivir. Mientras crecen las divisiones que amenazan con el fin de la pandilla Arthur debe decidir entre sus propios ideales y su lealtad a la pandilla que lo crió.",
    fecha: "2018-10-26", trailer: "https://www.youtube.com/embed/MyaYlbizpvs?si=VCBSoHWHA-EuwMwb", desarrolladora: "Rockstar Games", genero:"Aventura", symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",symbolswitch:"bi bi-x-lg", nswitch:"tick-red", symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Alberto Mayoral", text: "Red Dead Redemption es probablemente uno de los mejores videojuegos que he jugado en mi vida. Durante toda la aventura no dejas de sorprenderte por el nivel de inmersión que Rockstar ha logrado crear. Respecto a la historia y el desarrollo de todos sus personajes es sencillamente una de las mejores de todo el medio audiovisual. Si te gustan los juegos de mundo abierto, con una historia que te atrapa desde el primer momento y la ambientación western, este es tú juego.", reviewValue: [,,,,]}, 
    { user: "Jorge", text: "Uno de los juegos más sobrevalorados de la industria del videojuego. El mundo abierto no es absolutamente nada novedoso, al igual que los gráficos. Respecto a su historia, es lenta y aburrida. No entiendo como a la gente le puede gustar.", reviewValue: [,,]},
    {user: "Sebas", text: "Simplemente un juego de locos, es un juego que eleva la narrativa en los videojuegos a un nivel que nunca antes había visto. Con su rica historia de la banda de forajidos, el juego te ofrece una experiencia emocionalmente impactante y profundamente satisfactoria que captura la esencia misma de la vida en el Oeste.", reviewValue: [,,,]}]
});

addPost({ name: "Factorio", image: "https://assetsio.reedpopcdn.com/co1tfy.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Factorio es un juego sobre la construcción y creación de fábricas automatizadas para producir elementos de complejidad creciente, dentro de un mundo 2D infinito. Usa tu imaginación para diseñar tu fábrica, combina elementos simples en estructuras ingeniosas y, finalmente, protégela de las criaturas a las que realmente no les agradas.",
 fecha: "2016-15-02", trailer: "https://www.youtube.com/embed/J8SBp4SyvLc?si=taNZWEW5IUAM-fQg", desarrolladora: "Wube Software LTD", genero: "Estrategia", comments :[{user: "Jorge", text:"Compré este juego hace mucho tiempo y no me ha decepcionado, una maravillosa experiencia. 10/10 Lo recomiendo.", reviewValue: [,,,,,]}]
 });
addPost({ 
    name: "COD Black OPS 3", image: "https://m.media-amazon.com/images/I/51B1FAeNnCL._AC_UF894,1000_QL80_.jpg", description: "40 años después de los acontecimientos en Call of Duty: Black Ops II, el mundo tiene lugar en un futuro distópico, situado en 2065, donde la ciencia y la tecnología han cambiado radicalmente a la especie humana, con la sociedad violenta y las protestas y el intento de detener el progreso de la tecnología. La tecnología militar ha avanzado hasta el punto que la robótica juega un papel principal, y se han desarrollado supersoldados.",
    fecha: "2015-11-05", trailer: "https://www.youtube.com/embed/qAUYNIDEJ6o?si=qqs_TdW_fB-jSI1F", desarrolladora: "Treyarch", genero:"Shooter", symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",symbolswitch:"bi bi-x-lg", nswitch:"tick-red", symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Pablo Martínez", text: "Buen juego, recuerdo jugarlo con mi hermano de peqeño", reviewValue: [,,,,]}]
});
addPost({ 
    name: "Grand Theft Auto V", image: "https://i.ebayimg.com/images/g/gXoAAOSwgn1dWpwt/s-l1600.jpg", description: "En el año 2004, Michael Townley, Trevor Philips y Brad Snider eran ladrones de bancos que vivían en Ludendorff, en el estado de North Yankton (basado en Dakota del Norte). Michael, queriendo huir de esa vida, planea un atraco falso junto al agente federal corrupto Dave Norton. Dave tenía que matar a Trevor y arrestar a Brad mientras Michael fingía su muerte, pero todo sale mal porque Dave, en vez de dispararle a Trevor, le dispara a Brad y Trevor escapa. Michael es dado por muerto y es llevado con su familia a Los Santos (San Andreas) con una nueva identidad: «Michael De Santa».",
    trailer: "https://www.youtube.com/embed/QkkoHAzjnUs?si=LMFjFMuMugAbhKHD", desarrolladora: "Rockstar Games", genero:"Acción", symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",symbolswitch:"bi bi-x-lg", nswitch:"tick-red", symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Pedro", text: "Un juego muy violento", reviewValue: [,]}]
});
addPost({ name: "Mario Galaxy", image: "https://m.media-amazon.com/images/I/71gOWJnWXaL._AC_UF894,1000_QL80_.jpg", description: "El «Festival de las Estrellas» se celebra en el Reino Champiñón cada cien años para conmemorar el paso de un cometa gigantesco. Con motivo de esta festividad, Mario ha sido invitado al castillo por la Princesa Peach, pero cuando llega el día de dicho evento aparece Bowser, quien, descendiendo del cielo, viene acompañado de varios barcos voladores con los que pretende invadir el lugar y secuestrar a la princesa. Con una de sus gigantescas máquinas, semejante a un platillo volador, arranca el castillo del suelo, marchándose así junto con Peach al espacio. Cuando él intenta detenerlo, el esbirro de Bowser, Kamek, usa su varita mágica para deshacerse de Mario, enviándolo a través del cosmos.",
    trailer: "https://www.youtube.com/embed/8Mng-r3D20Y?si=AzInSerVcV2M8_Og"
});
addPost({ name: "God of War Ragnarok", image: "https://i.3djuegos.com/juegos/17544/god_of_war_ragnarok/fotos/ficha/god_of_war_ragnarok-5732813.webp", description: "En el año 2004, Michael Townley, Trevor Philips y Brad Snider eran ladrones de bancos que vivían en Ludendorff, en el estado de North Yankton (basado en Dakota del Norte). Michael, queriendo huir de esa vida, planea un atraco falso junto al agente federal corrupto Dave Norton. Dave tenía que matar a Trevor y arrestar a Brad mientras Michael fingía su muerte, pero todo sale mal porque Dave, en vez de dispararle a Trevor, le dispara a Brad y Trevor escapa. Michael es dado por muerto y es llevado con su familia a Los Santos (San Andreas) con una nueva identidad: «Michael De Santa».",
    trailer: "https://www.youtube.com/embed/-tIAazzD1gk?si=FXa8OkgjRM_5pMm9", desarrolladora: "Santa Mónica", genero:"Aventura", symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", symbolxbox:"bi bi-x-lg", xbox:"tick-red", symbolswitch:"bi bi-x-lg", nswitch:"tick-red", symbolpc:"bi bi-x-lg", pc:"tick-red",
    comments: [{ user: "Lucía", text: "Buena segunda parte", reviewValue: [,,,,]}] 
});

addPost({ 
    name: "ARK", image: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg", description: "Juega como un hombre o una mujer desnudo, congelándote y muriéndote de hambre en una isla misteriosa. Debes cazar, cosechar, crear objetos, cultivar, y construir refugios para sobrevivir. Usa tu habilidad y astucia para matar, domesticar, criar y cabalgar dinosaurios y otras criaturas primitivas." ,
    fecha: "2015-06-02", trailer: "https://www.youtube.com/embed/FW9vsrPWujI?si=JFYjsxmCCG4nHdPs", desarrolladora: "Studio Wildcard, Instinct Games, Efecto Studios, Virtual Basement LLC", genero: "Supervivencia",
});

addPost({ 
    name: "Deep Rock Galactic", image: "https://i.3djuegos.com/juegos/14980/deep_rock_galactic/fotos/ficha/deep_rock_galactic-5166570.jpg", description: "Deep Rock Galactic es un shooter cooperativo de ciencia ficción en primera persona con enanos espaciales de armas tomar, entornos totalmente destruibles, cuevas generadas procedimentalmente y hordas interminables de monstruos alienígenas." ,
    fecha: "2020-05-13", trailer: "https://www.youtube.com/embed/2_GV33zBf3A?si=sJRjB8RmJMZyHCWl", desarrolladora: "Ghost Ship Games", genero: "Acción", comments: [{user: "Mecánico Pepe", text: "Mi amigo me obligo a comprarlo, jugue una partida pero como soy muy malo me da pereza jugarlo mas, de todas formas me lo pase muy bien. Buen juego", reviewValue: [,,,,]}]
    
});

addPost({ name: "Minecraft", image: "/Imagenes_practica/minecraft.jpeg", description: "Barata, barata" });
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
const posts = new Map();
let idVariable;
let nextId = 0;
export function añadir(){

addPost({
    name: "NieR: Automata",
    image: "https://media.vandal.net/m/31670/nier-automata-201739151954_1.jpg",
    description: "NieR: Automata es un juego de acción y rol que se desarrolla en un mundo postapocalíptico donde controlas a androides de combate en su lucha contra las máquinas. La narrativa profunda y la mezcla de géneros hacen de este juego una experiencia única.",
    fecha: "2017-03-17",
    trailer: "https://www.youtube.com/embed/Am2jbwofIoo?si=y1eH0pfbQUeSYtRS",
    desarrolladora: "PlatinumGames",
    genero: "Acción",
    symbolps: "bi bi-check2", ps: "tick", checkedps: "checked",
    symbolxbox: "bi bi-check2", xbox: "tick", checkedxbox: "checked",
    symbolswitch: "bi bi-x-lg", nswitch: "tick-red",
    symbolpc: "bi bi-check2", pc: "tick", checkedpc: "checked",
    comments: [{ user: "GamerGirl", text: "La trama de este juego es simplemente fascinante. Una obra maestra en todos los aspectos.", reviewValue: [,,,,] }]
});

addPost({
    name: "Dark Souls III",
    image: "https://media.vandal.net/m/31454/dark-souls-iii-2016412115050_1.jpg",
    description: "Dark Souls III es un desafiante juego de acción y RPG que te sumerge en un mundo oscuro y lleno de peligros. Enfrenta a enemigos formidables, descubre secretos y mejora tu personaje en esta experiencia épica.",
    fecha: "2016-04-12",
    trailer: "https://www.youtube.com/embed/_zDZYrIUgKE?si=5if-LPcJQYO9o7Rx",
    desarrolladora: "FromSoftware",
    genero: "RPG",
    symbolps: "bi bi-check2", ps: "tick", checkedps: "checked",
    symbolxbox: "bi bi-check2", xbox: "tick", checkedxbox: "checked",
    symbolswitch: "bi bi-x-lg", nswitch: "tick-red",
    symbolpc: "bi bi-check2", pc: "tick", checkedpc: "checked",
    comments: [{ user: "SoulSeeker", text: "Un juego desafiante que recompensa la perseverancia. La atmósfera es impresionante.", reviewValue: [,,,,] }]
});

addPost({
    name: "The Elder Scrolls V: Skyrim",
    image: "https://media.vandal.net/m/39790/the-elder-scrolls-v-skyrim-special-edition-201661365045_1.jpg",
    description: "Skyrim es un juego de rol de mundo abierto que te sumerge en el vasto continente de Tamriel. Conviértete en el Dovahkiin y enfrenta dragones, elige tu destino y vive una épica aventura en un mundo lleno de misterios y magia.",
    fecha: "2011-11-11",
    trailer: "https://www.youtube.com/embed/PjqsYzBrP-M?si=PYxeWlIxSGCfYnYV",
    desarrolladora: "Bethesda Game Studios",
    genero: "RPG",
    symbolps: "bi bi-check2", ps: "tick", checkedps: "checked",
    symbolxbox: "bi bi-check2", xbox: "tick", checkedxbox: "checked",
    symbolswitch: "bi bi-x-lg", nswitch: "tick-red",
    symbolpc: "bi bi-check2", pc: "tick", checkedpc: "checked",
    comments: [{ user: "Dragonborn", text: "¡Fus Ro Dah! Skyrim es una obra maestra que ofrece horas interminables de exploración.", reviewValue: [,,,,] }]
});

addPost({
    name: "The Witcher 3: Wild Hunt",
    image: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f",
    description: "The Witcher 3: Wild Hunt es un juego de rol de mundo abierto, ambientado en un mundo de fantasía lleno de monstruos, magia y decisiones morales impactantes. Juegas como Geralt de Rivia, un cazador de monstruos mutante, en busca de su hija adoptiva perdida.",
    fecha: "2015-05-19",
    trailer: "https://www.youtube.com/embed/c0i88t0Kacs?si=6GLm5ZViS-uKjiV4",
    desarrolladora: "CD Projekt",
    genero: "RPG",
    symbolps: "bi bi-check2", ps: "tick", checkedps: "checked",
    symbolxbox: "bi bi-check2", xbox: "tick", checkedxbox: "checked",
    symbolswitch: "bi bi-x-lg", nswitch: "tick-red",
    symbolpc: "bi bi-check2", pc: "tick", checkedpc: "checked",
    comments: [{ user: "Gamer123", text: "Una obra maestra, el mejor juego de la generación.", reviewValue: [,,,,] }]
});

addPost({
    name: "Assassin's Creed Valhalla",
    image: "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",
    description: "Assassin's Creed Valhalla te lleva a la era vikinga, donde juegas como Eivor, un guerrero vikingo en busca de un nuevo hogar en Inglaterra. Explora, saquea y lucha en este juego de acción y aventuras.",
    fecha: "2020-11-10",
    trailer: "https://www.youtube.com/embed/ssrOze7GXik?si=D8IUVJllQ4eKFoXK",
    desarrolladora: "Ubisoft",
    genero: "Acción",
    symbolps: "bi bi-check2", ps: "tick", checkedps: "checked",
    symbolxbox: "bi bi-check2", xbox: "tick", checkedxbox: "checked",
    symbolswitch: "bi bi-x-lg", nswitch: "tick-red",
    symbolpc: "bi bi-check2", pc: "tick", checkedpc: "checked",
    comments: [{ user: "NordicWarrior", text: "Me encanta la ambientación vikinga, y el juego tiene una historia fascinante.", reviewValue: [,,,,] }]
});

addPost({
    name: "Cyberpunk 2077",
    image: "https://media.vandal.net/m/20029/cyberpunk-2077-201961217172698_1.jpg",
    description: "En un futuro distópico, encarnas a V, un mercenario en busca de inmortalidad, en la ciudad de Night City. Cyberpunk 2077 ofrece un mundo abierto lleno de opciones y decisiones que afectan la historia.",
    fecha: "2020-12-10",
    trailer: "https://www.youtube.com/embed/8X2kIfS6fb8?si=WxgOgqRlTDqE4D88",
    desarrolladora: "CD Projekt",
    genero: "RPG",
    symbolps: "bi bi-check2", ps: "tick", checkedps: "checked",
    symbolxbox: "bi bi-check2", xbox: "tick", checkedxbox: "checked",
    symbolswitch: "bi bi-x-lg", nswitch: "tick-red",
    symbolpc: "bi bi-check2", pc: "tick", checkedpc: "checked",
    comments: [{ user: "TechieGuy", text: "A pesar de los problemas iniciales, el juego tiene una historia envolvente y un mundo impresionante.", reviewValue: [,,,,] }]
});
addPost({
    name: "Red Dead Redemption 2", 
    image: "https://i.blogs.es/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg", 
    description: "Tras un asalto fallido en el pueblo de Blackwater, Arthur Morgan y la pandilla de Van der Linde se ven forzados a huir. Con agentes federales y los mejores cazarrecompensas pisando sus talones, la pandilla deberá asaltar, robar y hacerse camino a través de una América despiadada para poder sobrevivir. Mientras crecen las divisiones que amenazan con el fin de la pandilla Arthur debe decidir entre sus propios ideales y su lealtad a la pandilla que lo crió.",
    fecha: "2018-10-26", 
    trailer: "https://www.youtube.com/embed/MyaYlbizpvs?si=VCBSoHWHA-EuwMwb", 
    desarrolladora: "Rockstar Games", 
    genero:"Aventura", 
    symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", 
    symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red",
    symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Alberto Mayoral", text: "Red Dead Redemption es probablemente uno de los mejores videojuegos que he jugado en mi vida. Durante toda la aventura no dejas de sorprenderte por el nivel de inmersión que Rockstar ha logrado crear. Respecto a la historia y el desarrollo de todos sus personajes es sencillamente una de las mejores de todo el medio audiovisual. Si te gustan los juegos de mundo abierto, con una historia que te atrapa desde el primer momento y la ambientación western, este es tú juego.", reviewValue: [,,,,]}, 
    { user: "Jorge Cimadevilla", text: "Uno de los juegos más sobrevalorados de la industria del videojuego. El mundo abierto no es absolutamente nada novedoso, al igual que los gráficos. Respecto a su historia, es lenta y aburrida. No entiendo como a la gente le puede gustar.", reviewValue: [,,]},
    {user: "Sebas Silvera", text: "Simplemente un juego de locos, es un juego que eleva la narrativa en los videojuegos a un nivel que nunca antes había visto. Con su rica historia de la banda de forajidos, el juego te ofrece una experiencia emocionalmente impactante y profundamente satisfactoria que captura la esencia misma de la vida en el Oeste.", reviewValue: [,,,]}]
});

addPost({ 
    name: "Factorio", 
    image: "https://assetsio.reedpopcdn.com/co1tfy.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", 
    description: "Factorio es un juego sobre la construcción y creación de fábricas automatizadas para producir elementos de complejidad creciente, dentro de un mundo 2D infinito. Usa tu imaginación para diseñar tu fábrica, combina elementos simples en estructuras ingeniosas y, finalmente, protégela de las criaturas a las que realmente no les agradas.",
    fecha: "2016-15-02", 
    trailer: "https://www.youtube.com/embed/J8SBp4SyvLc?si=taNZWEW5IUAM-fQg", 
    desarrolladora: "Wube Soft  ware LTD", 
    genero: "Estrategia", 
    symbolps:"bi bi-question", 
    symbolxbox:"bi bi-question",
    symbolswitch:"bi bi-question", 
    symbolpc:"bi bi-question",
    comments :[{user: "Jorge", text:"Compré este juego hace mucho tiempo y no me ha decepcionado, una maravillosa experiencia. 10/10 Lo recomiendo.", reviewValue: [,,,,,]}]
 });
addPost({ 
    name: "COD Black OPS 3", 
    image: "https://m.media-amazon.com/images/I/51B1FAeNnCL._AC_UF894,1000_QL80_.jpg", 
    description: "40 años después de los acontecimientos en Call of Duty: Black Ops II, el mundo tiene lugar en un futuro distópico, situado en 2065, donde la ciencia y la tecnología han cambiado radicalmente a la especie humana, con la sociedad violenta y las protestas y el intento de detener el progreso de la tecnología. La tecnología militar ha avanzado hasta el punto que la robótica juega un papel principal, y se han desarrollado supersoldados.",
    fecha: "2015-11-05", 
    trailer: "https://www.youtube.com/embed/qAUYNIDEJ6o?si=qqs_TdW_fB-jSI1F", 
    desarrolladora: "Treyarch", 
    genero:"Shooter", 
    symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", 
    symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red", 
    symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Pablo Martínez", text: "Buen juego, recuerdo jugarlo con mi hermano de pequeño", reviewValue: [,,,,]}]
});
addPost({ 
    name: "Grand Theft Auto V", 
    image: "https://i.ebayimg.com/images/g/gXoAAOSwgn1dWpwt/s-l1600.jpg", 
    description: "En el año 2004, Michael Townley, Trevor Philips y Brad Snider eran ladrones de bancos que vivían en Ludendorff, en el estado de North Yankton (basado en Dakota del Norte). Michael, queriendo huir de esa vida, planea un atraco falso junto al agente federal corrupto Dave Norton. Dave tenía que matar a Trevor y arrestar a Brad mientras Michael fingía su muerte, pero todo sale mal porque Dave, en vez de dispararle a Trevor, le dispara a Brad y Trevor escapa. Michael es dado por muerto y es llevado con su familia a Los Santos (San Andreas) con una nueva identidad: «Michael De Santa».",
    trailer: "https://www.youtube.com/embed/QkkoHAzjnUs?si=LMFjFMuMugAbhKHD", 
    desarrolladora: "Rockstar Games", 
    genero:"Acción", 
    symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", 
    symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red", 
    symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked",
    comments: [{ user: "Pedro", text: "Un juego muy violento", reviewValue: [,]}]
});
addPost({ 
    name: "Mario Galaxy", 
    image: "https://m.media-amazon.com/images/I/71gOWJnWXaL._AC_UF894,1000_QL80_.jpg", 
    description: "El «Festival de las Estrellas» se celebra en el Reino Champiñón cada cien años para conmemorar el paso de un cometa gigantesco. Con motivo de esta festividad, Mario ha sido invitado al castillo por la Princesa Peach, pero cuando llega el día de dicho evento aparece Bowser, quien, descendiendo del cielo, viene acompañado de varios barcos voladores con los que pretende invadir el lugar y secuestrar a la princesa. Con una de sus gigantescas máquinas, semejante a un platillo volador, arranca el castillo del suelo, marchándose así junto con Peach al espacio. Cuando él intenta detenerlo, el esbirro de Bowser, Kamek, usa su varita mágica para deshacerse de Mario, enviándolo a través del cosmos.",
    trailer: "https://www.youtube.com/embed/8Mng-r3D20Y?si=AzInSerVcV2M8_Og", 
    symbolps:"bi bi-question", 
    symbolxbox:"bi bi-question", 
    symbolswitch:"bi bi-question", 
    symbolpc:"bi bi-question"
});
addPost({ 
    name: "God of War Ragnarok", 
    image: "https://ae01.alicdn.com/kf/Sa8078be663894af7aad1a359dae1d840h/P-ster-de-lienzo-art-stico-impreso-de-God-of-War-Ragnarok-Game-para-decoraci-n.jpg", description: "En el año 2004, Michael Townley, Trevor Philips y Brad Snider eran ladrones de bancos que vivían en Ludendorff, en el estado de North Yankton (basado en Dakota del Norte). Michael, queriendo huir de esa vida, planea un atraco falso junto al agente federal corrupto Dave Norton. Dave tenía que matar a Trevor y arrestar a Brad mientras Michael fingía su muerte, pero todo sale mal porque Dave, en vez de dispararle a Trevor, le dispara a Brad y Trevor escapa. Michael es dado por muerto y es llevado con su familia a Los Santos (San Andreas) con una nueva identidad: «Michael De Santa».",
    trailer: "https://www.youtube.com/embed/-tIAazzD1gk?si=FXa8OkgjRM_5pMm9", 
    desarrolladora: "Santa Mónica", 
    genero:"Aventura", 
    symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", 
    symbolxbox:"bi bi-x-lg", xbox:"tick-red", 
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red", 
    symbolpc:"bi bi-x-lg", pc:"tick-red",
    comments: [{ user: "Lucía", text: "Buena segunda parte", reviewValue: [,,,,]}] 
});

addPost({ 
    name: "ARK", 
    image: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg", 
    description: "Juega como un hombre o una mujer desnudo, congelándote y muriéndote de hambre en una isla misteriosa. Debes cazar, cosechar, crear objetos, cultivar, y construir refugios para sobrevivir. Usa tu habilidad y astucia para matar, domesticar, criar y cabalgar dinosaurios y otras criaturas primitivas." ,
    fecha: "2015-06-02", 
    trailer: "https://www.youtube.com/embed/FW9vsrPWujI?si=JFYjsxmCCG4nHdPs", 
    desarrolladora: "Studio Wildcard, Instinct Games, Efecto Studios, Virtual Basement LLC", 
    genero: "Supervivencia", 
    symbolps:"bi bi-question", 
    symbolxbox:"bi bi-question", 
    symbolswitch:"bi bi-question", 
    symbolpc:"bi bi-question"
});

addPost({ 
    name: "Deep Rock Galactic", 
    image: "https://i.3djuegos.com/juegos/14980/deep_rock_galactic/fotos/ficha/deep_rock_galactic-5166570.jpg", 
    description: "Deep Rock Galactic es un shooter cooperativo de ciencia ficción en primera persona con enanos espaciales de armas tomar, entornos totalmente destruibles, cuevas generadas procedimentalmente y hordas interminables de monstruos alienígenas." ,
    fecha: "2020-05-13", 
    trailer: "https://www.youtube.com/embed/2_GV33zBf3A?si=sJRjB8RmJMZyHCWl", 
    desarrolladora: "Ghost Ship Games", 
    genero: "Acción", 
    symbolps:"bi bi-question", 
    symbolxbox:"bi bi-question", 
    symbolswitch:"bi bi-question", 
    symbolpc:"bi bi-question",
    comments: [{user: "Mecánico Pepe", text: "Mi amigo me obligó a comprarlo, jugué una partida pero como soy muy malo me da pereza jugarlo más, de todas formas me lo pase muy bien. Buen juego", reviewValue: [,,,,]}]
    
});

addPost({
    name: "Minecraft", 
    image: "https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png", 
    description: "Minecraft es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
    trailer:"https://www.youtube.com/embed/MmB9b5njVbA?si=TBDghXWX6LTJ-ZFa", 
    symbolps:"bi bi-question", 
    symbolxbox:"bi bi-question", 
    symbolswitch:"bi bi-question", 
    symbolpc:"bi bi-question"
});
addPost({ 
    name: "Hades",
     image: "https://i.3djuegos.com/juegos/16330/hades/fotos/ficha/hades-5231058.jpg", 
     description: "Hades es un juego roguelike de exploración de mazmorras que combina los mejores aspectos de los aclamados títulos anteriores de Supergiant, como la acción rápida de Bastion, la atmósfera y la profundidad de Transistor y la narrativa centrada en los personajes de Pyre.",
    fecha:"2018-12-6",
    trailer:"https://www.youtube.com/embed/iRDeQoad80s?si=xh4HQkYRBC4GAR3w",
    desarrolladora:"Supergiant Games, Supergiant Games, LLC", 
    genero:"Acción", 
    symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", 
    symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red", 
    symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked" 
});

addPost({ 
    name: "BloodBorne", 
    image: "https://www.tebeosfera.com/T3content/img/T3_numeros/0/1/num1_vBtD-001.jpg",
    description: "El juego de tablero es un desafiante y tenebroso juego cooperativo donde 1 a 4 Cazadores deberán explorar la ciudad de Yharnam y luchar contra bestias, monstruos y ciudadanos enloquecidos. Solo así sobrevivirán a la noche y erradicarán la fuente de la locura que la consume.",
    fecha:"2015-03-24",
    trailer:"https://www.youtube.com/embed/2Crk_GpxGQE?si=44eBOpToSmN5_-v3",
    desarrolladora:"FromSoftware",
    genero:"Acción",
    symbolps:"bi bi-check2", ps:"tick", checkedps:"checked",
    symbolxbox:"bi bi-x-lg",xbox:"tick-red",
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red", 
    symbolpc:"bi bi-x-lg", pc:"tick-red"
});
addPost({ 
    name: "The last of us", 
    image: "https://static.posters.cz/image/750/the-last-of-us-key-art-i127761.jpg", 
    description: "De acuerdo con la trama de The Last of Us, en septiembre de 2013 se desata una pandemia en Estados Unidos ocasionada por una cepa del hongo Cordyceps, que al infectar a los humanos los convierte en criaturas caníbales, y que se transmite a través de una simple mordedura. En medio de la histeria colectiva, Joel (Troy Baker), su hija Sarah (Hana Hayes) y su hermano Tommy (Jeffrey Pierce) abandonan su hogar en los suburbios de Austin, Texas para evitar la infección, pero en el camino son interceptados por un oficial que asesina a Sarah al creer que está infectada.",
    trailer:"https://www.youtube.com/embed/JZ-YYj7VopU?si=GQU-kmQ_V5-1gWqw", 
    symbolps:"bi bi-question", 
    symbolxbox:"bi bi-question", 
    symbolswitch:"bi bi-question", 
    symbolpc:"bi bi-question"
});
addPost({ 
    name: "Dantes Inferno",
     image: "https://media.vandal.net/m/9705/201011910547_1.jpg", 
     description: "Narra la historia de Dante, un caballero Templario que tras volver de una sangrienta cruzada, descubre que su amada Beatriz ha muerto y debe de bajar hasta el infierno para salvar su alma de las manos de Lucifer.",
    fecha:"2010-02-05",
    trailer:"https://www.youtube.com/embed/UUOZRRU_Dyg?si=vrQdpUdU7pU1Keoa",
    desarrolladora:"Electronic Arts, Visceral Games, Behaviour Interactive, Artificial Mind & Movement",
     genero:"Acción", 
     symbolps:"bi bi-question", symbolxbox:"bi bi-question",
      symbolswitch:"bi bi-question", symbolpc:"bi bi-question"
});

addPost({ 
    name: "EA Sports 24",
     image: "https://i.blogs.es/156597/51cjvxc5xwl._sl500_/original.jpeg", 
     description: "Juego el cual se centra en recrear de manera virtual lo que sería un partido de fúbol, con mas de 19 000 futbolistas asosiados, 700 clubes, 100 estadios y 30 ligas de todo el mundo.",
    fecha:"2023-9-29",
    trailer:"https://www.youtube.com/embed/XhP3Xh4LMA8?si=q7nU0nasmx-G43CF",
    desarrolladora:"EA Sports",
     genero:"Deporte",
      symbolps:"bi bi-check2", ps:"tick", checkedps:"checked", 
      symbolxbox:"bi bi-check2", xbox:"tick", checkedxbox:"checked",
      symbolswitch:"bi bi-x-lg", nswitch:"tick-red",
       symbolpc:"bi bi-check2", pc:"tick", checkedpc:"checked"

});
addPost({ 
    name: "Mafia City",
    image: "https://static.tvtropes.org/pmwiki/pub/images/950x950bb.jpg",
    description: "Lucha por el poder para alcanzar tus sueños, ¡no podrás parar de jugar! ☆Batallas entre territorios cada día, guerras durante todo el año. Función de zoom, multiángulo de 360 grados con una imagen gráfica que proporciona una realidad virtual sin igual.",
    fecha:"2018-11-12",
    trailer:"https://www.youtube.com/embed/Yke9BhP1uks?si=lUoieUkJkqkVBddF",
    desarrolladora:"VoyagerOne Pte. Ltd.",
    genero:"Simulación", 
    symbolps:"bi bi-x-lg",ps:"tick-red", 
    symbolxbox:"bi bi-x-lg",xbox:"tick-red", 
    symbolswitch:"bi bi-x-lg", nswitch:"tick-red", 
    symbolpc:"bi bi-x-lg", pc:"tick-red"
});
}


añadir();

export function getPosts(from, to, genero, nameInput) {
    let values = [...posts.values()];
    if (genero && genero !== "No seleccionado") {
        values = values.filter(post => post.genero === genero);
    }

    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function getPosts2() {
    return [...posts.values()];
}

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
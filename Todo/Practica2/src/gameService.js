const posts = new Map();
let nextId = 0;

addPost({ name: "Red Dead Redemption 2", image: "/Imagenes_practica/RDR2.jpg", description: "Barata, barata" });
addPost({ name: "Factorio", image:"/Imagenes_practica/Factorio.jpeg", description: "Pago bien" });
addPost({ name: "Call of Duty", image: "/Imagenes_practica/COD.jpeg", description: "Barata, barata" });
addPost({ name: "Grand theft auto V", image: "/Imagenes_practica/gtav.jpeg", description: "Pago bien" });
addPost({ name: "Mario Galaxy", image: "/Imagenes_practica/MarioGalaxy.jpg", description: "Barata, barata" });
addPost({ name: "God of War Ragnarok", image: "/Imagenes_practica/godofwar.jpeg", description: "Barata, barata" });
addPost({ name: "The last of us", image:"/Imagenes_practica/thelastofus.jpeg", description: "Pago bien" });
addPost({ name: "ARK", image:"/Imagenes_practica/ARK.jpeg", description: "Pago bien" });
addPost({ name: "Bloodborne", image:"/Imagenes_practica/Bloodborne.jpeg", description: "Pago bien" });
addPost({ name: "Dantes Inferno", image:"/Imagenes_practica/dantes.jpeg", description: "Pago bien" });
addPost({ name: "Hades", image:"/Imagenes_practica/Hades.jpeg", description: "Pago bien" });
addPost({ name: "Depprock", image:"/Imagenes_practica/depprock.jpeg", description: "Pago bien" });
addPost({ name: "EA Sports 24", image:"/Imagenes_practica/fifa24.jpeg", description: "Pago bien" });
addPost({ name: "Minecraft", image: "/Imagenes_practica/minecraft.jpeg", description: "Barata, barata" });
addPost({ name: "Mafia City", image: "/Imagenes_practica/mafiacity.jpeg", description: "Pago bien" });



export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getPost(id){
    return posts.get(id);
}
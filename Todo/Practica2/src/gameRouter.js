import express from 'express';
import * as gameService from './gameService.js';

const router = express.Router(); //router sera el encargado de controlar todas las peticiones del servidor 

router.get('/', (req, res) => { //esta cuando el que pida sea con una raiz "/"

    res.render('PracticaWeb', { 
        posts: gameService.getPosts() 
    });
});

router.get('/new', (req, res) => { //esta cuando el que pida sea con una raiz "/new"

    let tipo = "/";
    let funcion = "/post/new";
    res.render('PracticaWebPaginaNuevoElemento',{tipo,funcion});
});

router.get('/post/:id/edit', (req, res) => { //esta cuando el que pida sea con una raiz "/post/:id/edit"

    let post = gameService.getPost(req.params.id);
    let tipo = "/post/:id";
    let funcion = "/post/edit";
    let id = req.params.id;
    gameService.saveId(id);
    res.render('PracticaWebPaginaNuevoElemento',{post,tipo,funcion});
});

router.post('/post/edit', (req, res) => {

    let {name, image, description, trailer, fecha, desarrolladora, genero, ps ,xbox, nswitch, pc} = req.body;
    let symbolps = gameService.symbol(ps);
    ps = gameService.symbolcolor(ps);
    let symbolxbox = gameService.symbol(xbox);
    xbox = gameService.symbolcolor(xbox);
    let symbolswitch = gameService.symbol(nswitch);
    nswitch = gameService.symbolcolor(nswitch);
    let symbolpc = gameService.symbol(pc);
    pc = gameService.symbolcolor(pc);
    let accion = "editado";
    let paginaName = "detalle";
    let id = gameService.getId();
    let pagina = "/post/" + id;
    if(name&&image&&description&&trailes&&fecha&&desarrolladora&&genero&&ps&&symbolps&&xbox&&symbolxbox&&nswitch&&symbolswitch&&pc&&symbolpc) {
        gameService.editPost(id,{name, image, description, trailer, fecha, desarrolladora, genero, ps, symbolps, xbox, symbolxbox, nswitch, symbolswitch, pc, symbolpc});
        res.render('PaginaIntermedia',{name,accion,pagina,paginaName});  
    }
    else {
        res.render('PaginaError');
    }
});


router.post('/post/new', (req, res) => {

    let {name, image, description, trailer, fecha, desarrolladora, genero, ps ,xbox, nswitch, pc} = req.body;
    let symbolps = gameService.symbol(ps);
    ps = gameService.symbolcolor(ps);
    let symbolxbox = gameService.symbol(xbox);
    xbox = gameService.symbolcolor(xbox);
    let symbolswitch = gameService.symbol(nswitch);
    nswitch = gameService.symbolcolor(nswitch);
    let symbolpc = gameService.symbol(pc);
    pc = gameService.symbolcolor(pc);
    let accion = "creado";
    let paginaName = "principal";
    let pagina = "/";
    gameService.addPost({name, image, description, trailer, fecha, desarrolladora, genero, ps, symbolps, xbox, symbolxbox, nswitch, symbolswitch, pc, symbolpc});
    res.render('PaginaIntermedia',{name,accion,pagina,paginaName});
});

router.get('/post/:id', (req, res) => {

    let post = gameService.getPost(req.params.id);

    res.render('PracticaWebPaginaDetalle',{post});
});

router.post('/post/:id/comment', (req, res) => {
    const postId = req.params.id;
    const { user, text, estrellas } = req.body;
    const reviewValue = Array.from({ length: estrellas }, (_, index) => index + 1);
    gameService.addComment(postId, { user, text, reviewValue });
    res.redirect(`/post/${postId}`);
});

router.get('/post/:id/delete', (req, res) => {

    let post = gameService.getPost(req.params.id);
    let name = post.name;
    let accion = "eliminado";
    let paginaName = "principal";
    let pagina = "/";
    gameService.deletePost(req.params.id);

    res.render('PaginaIntermedia',{name,accion,pagina,paginaName});
});

export default router;
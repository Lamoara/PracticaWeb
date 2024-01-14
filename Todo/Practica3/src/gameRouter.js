import express from 'express';
import * as gameService from './gameService.js';

const router = express.Router(); //router sera el encargado de controlar todas las peticiones del servidor 

router.get('/', (req, res) => {

    let genero = 'No seleccionado';
    const game = gameService.getPosts(0,8,genero);
    
    res.render('PracticaWeb', {
        posts: game
    });
});

router.get('/moreGames', (req, res) => {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    const genero = req.query.genero;
    const game = gameService.getPosts(from, to, genero);

    res.render('Extragames', {
        posts: game
    });
});

router.get('/searchGames', (req, res) => {
    const nameInput = req.query.nameInput;
    const games = gameService.searchGame(nameInput);

    res.json({ posts: games });
});


router.get('/addfavorito',(req, res) => {
    const id= parseInt(req.query.elementoId);
    let post = gameService.getPost(id);
    res.render('favorite.html', {
        post, id
    }); //en teoria se renderiza la pagina favorite en el que tengo solo que mostrar el nombre
    
});


router.get('/new', (req, res) => { //esta cuando el que pida sea con una raiz "/new"

    let tipo = "/";
    let funcion = "/post/new";
    res.render('PracticaWebPaginaNuevoElemento',{tipo,funcion});
});

router.get('/post/:id/edit', (req, res) => { //esta cuando el que pida sea con una raiz "/post/:id/edit"

    let post = gameService.getPost(req.params.id);
    let id = req.params.id;
    let tipo = "/post/" + id;
    let funcion = "/post/edit";
    gameService.saveId(id);
    res.render('PracticaWebPaginaNuevoElemento',{post,tipo,funcion});
});

router.post('/post/edit', (req, res) => {

    let {name, image, description, trailer, fecha, desarrolladora, genero, checkedps, checkedxbox, checkednswitch, checkedpc} = req.body;
    let symbolps = gameService.symbol(checkedps);
    let ps = gameService.symbolcolor(checkedps);
    let symbolxbox = gameService.symbol(checkedxbox);
    let xbox = gameService.symbolcolor(checkedxbox);
    let symbolswitch = gameService.symbol(checkednswitch);
    let nswitch = gameService.symbolcolor(checkednswitch);
    let symbolpc = gameService.symbol(checkedpc);
    let pc = gameService.symbolcolor(checkedpc);
    let accion = "editado";
    let paginaName = "detalle";
    let id = gameService.getId();
    let pagina = "/post/" + id;
    //if(name&&image&&description&&trailer) {
        gameService.editPost(id,{name, image, description, trailer, fecha, desarrolladora, genero, ps, symbolps, checkedps, xbox, symbolxbox, checkedxbox, nswitch, symbolswitch, checkednswitch, pc, symbolpc, checkedpc});
        res.render('PaginaIntermedia',{name,accion,pagina,paginaName});  
    /*}
    else {
        let id = gameService.getId();
        let volver = "/post/" + id +"/edit";
        res.render('PaginaError',{name,image,description,trailer,volver});
    }*/
});


router.post('/post/new', (req, res) => {

    let {name, image, description, trailer, fecha, desarrolladora, genero, checkedps, checkedxbox, checkednswitch, checkedpc} = req.body;
    let symbolps = gameService.symbol(checkedps);
    let ps = gameService.symbolcolor(checkedps);
    let symbolxbox = gameService.symbol(checkedxbox);
    let xbox = gameService.symbolcolor(checkedxbox);
    let symbolswitch = gameService.symbol(checkednswitch);
    let nswitch = gameService.symbolcolor(checkednswitch);
    let symbolpc = gameService.symbol(checkedpc);
    let pc = gameService.symbolcolor(checkedpc);
    let accion = "creado";
    let paginaName = "principal";
    let pagina = "/";
    //if(name&&image&&description&&trailer) {
        gameService.addPost({name, image, description, trailer, fecha, desarrolladora, genero, ps, symbolps, xbox, symbolxbox, nswitch, symbolswitch, pc, symbolpc, checkedps, checkedxbox, checkednswitch, checkedpc});
        res.render('PaginaIntermedia',{name,accion,pagina,paginaName});  
    /*}
    else {
        let volver = "/new";
        res.render('PaginaError',{name,image,description,trailer,volver});
    }*/
});

router.get('/post/:id', (req, res) => {

    let post = gameService.getPost(req.params.id);

    res.render('PracticaWebPaginaDetalle',{post});
});

router.post('/post/:id/comment', (req, res) => {
    const postId = req.params.id;
    const { user, text, estrellas } = req.body;
    const reviewValue = Array.from({ length: estrellas }, (_, index) => index + 1);
    if(user){
    gameService.addComment(postId, { user, text, reviewValue });
    res.redirect(`/post/${postId}`);}
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
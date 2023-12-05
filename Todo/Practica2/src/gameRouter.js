import express from 'express';
import * as gameService from './gameService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('PracticaWeb', { 
        posts: gameService.getPosts() 
    });
});

router.post('/post/new', (req, res) => {

    let { name, image, description, trailer, fecha, desarrolladora, genero, consola } = req.body;

    gameService.addPost({ name, image, description, trailer, fecha, desarrolladora, genero, consola });

    res.render('PaginaIntermedia',{name});
});

router.get('/post/:id', (req, res) => {

    let post = gameService.getPost(req.params.id);

    let {user, text} = req.body;
    gameService.addComment(post, {user, text});

    res.render('PracticaWebPaginaDetalle', { post });
});

router.get('/post/:id/delete', (req, res) => {

    gameService.deletePost(req.params.id);

    res.render('PaginaIntermedia');
});

export default router;
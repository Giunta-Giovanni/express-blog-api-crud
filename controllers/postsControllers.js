// ci spostiamo i dati in cima
const send = require('send');
const postsData = require('../data/postsData');
const { error } = require('console');


//FUNCTION -> inseriamo le funzioni delle operazioni crud e la loro logica dandogli i nomi delle stesse operazione
// index
function index(req, res){
    // res.json(postsData);

    // inizialmente il post filtrato sarà uguale a quello originale
    let filteredPostsData = postsData;
    // se la richiesta contiene un filtro allora filtriamo i posts
    if (req.query.tags){
        // filtriamo i posts
        filteredPostsData = postsData.filter (post => post.tags.includes(req.query.tags));
    };

    // restituiamo il dato in formato json
    res.json(filteredPostsData);
}

// show
function show(req, res){
    // res.send(`mostra il post ${req.params.id}`);

    // recuperiamo il parametro dinamico dell'id e convertiamolo in numero salvandolo in variabile
    const id = parseInt(req.params.id);
    
    // utilizziamo il metodo find per identificare e farci restituire l'elemento corrispondente
    const post = postsData.find(post => post.id === id);
    // const post = postsData.find(post =>{
    //   if(post.id === id){
    //     return post }
    // })

    //Risoluzione undefined
    if(!post){
        // ritorno lo stato di errore 404
        res.status(404)
        return res.json({
            error:'not found',
            message: 'il post non è esistente',
            help:"verifica se l'id è corretto"
        });
    }

    // restituiamo il dato in formato json
    res.json(post)
};

// store
function store(req, res){
    // res.send('crea un nuovo post');
    
};

// update
function update(req, res){
    res.send(`aggiorna il post ${req.params.id}`);
};

// modify
function modify(req, res){
    res.send(`modifica il post ${req.params.id}`);
};

// destroy
function destroy(req, res){
    // res.send(`elimina il post ${req.params.id}`);

    // recuperiamo il parametro dinamico dell'id e convertiamolo in numero salvandolo in variabile
    const id = parseInt(req.params.id);
    
    // utilizziamo il metodo find per identificare e farci restituire l'elemento corrispondente
    const post = postsData.find(post => post.id === id);

    //Risoluzione undefined
    if(!post){
        // ritorno lo stato di errore 404
        res.status(404)
        return res.json({
            error:'not found',
            message: 'il post non è esistente',
            help:"verifica se l'id è corretto"
        });
    }


    //se trova l'elemento rimuovilo dall'array di oggetti
    postsData.splice(postsData.indexOf(post),1);
    
    // mostrami l'array aggiornato
    console.log(postsData);

    //Restituiamo al Client che è stato effettuato tutto con successo
    res.sendStatus(204); //204 ok, nessun contenuto

};

module.exports = {index, show, store, update, modify, destroy};
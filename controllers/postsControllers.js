// ci spostiamo i dati in cima
const menu = require('../data/postsData');


//FUNCTION -> inseriamo le funzioni delle operazioni crud e la loro logica dandogli i nomi delle stesse operazione
// index
function index(req, res){
    res.send('la mia lista di posts')
};
// show
function show(req, res){
    res.send(`mostra il post ${req.params.id}`);
};
// store
function store(req, res){
    res.send('crea un nuovo post');
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
    res.send(`elimina il post ${req.params.id}`);

};

module.exports = {index, show, store, update, modify, destroy};
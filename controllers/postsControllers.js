// ci spostiamo i dati in cima
const postsData = require('../data/postsData');


//FUNCTION -> inseriamo le funzioni delle operazioni crud e la loro logica dandogli i nomi delle stesse operazione
// index
function index(req, res){
    res.json(postsData);
};

// show
function show(req, res){
    // res.send(`mostra il post ${req.params.id}`);

    // recuperiamo il parametro dinamico dell'id e convertiamolo in numero salvandolo in variabile
    const id = parseInt(req.params.id);
    
    // utilizziamo il metodo find per identificare e farci restituire l'elemento corrispondente
    const post = postsData.find(post => post.id === id)
    // const post = postsData.find(post =>{
    //   if(post.id === id){
    //     return post }
    // })

    // restituiamo il dato in formato jspm
    res.json(post)
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
    // res.send(`elimina il post ${req.params.id}`);


    // recuperiamo il parametro dinamico dell'id e convertiamolo in numero salvandolo in variabile
    const id = parseInt(req.params.id);
    
    // utilizziamo il metodo find per identificare e farci restituire l'elemento corrispondente
    const post = postsData.find(post => post.id === id)



    //se trova l'elemento rimuovilo dall'array di oggetti
    postsData.splice(postsData.indexOf(post),1);
    
    // mostrami l'array aggiornato
    console.log(postsData)

    //Restituiamo al Client che è stato effettuato tutto con successo
    res.sendStatus(204); //204 ok, nessun contenuto

};

module.exports = {index, show, store, update, modify, destroy};
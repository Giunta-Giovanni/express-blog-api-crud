// importiamo express
const express = require ('express');
// creiamo una variabile router il cui valore sarà un istanza di express.Router()
const router = express.Router();

// ROTTE CRUD

// index
router.get('/', function (req, res){
    res.send('mostra index post');
})

// show
router.get('/:id', function (req, res){
    res.send('mostra il post' + req.params.id);

})
// store
router.post('/', function (req, res){
    res.send('crea un nuovo post');

})
// update
router.put('/:id', function (req, res){
    res.send('aggiorna il post' + req.params.id);
})
// modify
router.patch('/:id', function (req, res){
    res.send('modifica il post' + req.params.id);
})
// destroy
router.delete('/:id', function (req, res){
    res.send('elimina il post' + req.params.id);
})







// esportiamo router
module.exports = router

// funzione che genera un messaggio di errore e uno stato HTTP adeguato per richieste client non valide
function errorsHandler(err, req, res, next){
    res.status(500)
    res.json({
        "error":err.messagge,
    })
}
// esportiamo la funzione
module.exports(errorsHandler)
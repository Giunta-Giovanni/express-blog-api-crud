//importiamo express
const express = require ('express');
// inizializziamo express e lo salviamo in variabile
const app = express();
// salviamo la porta del serve che vogliamo utilizzare
const port = 3000;

// colleghiamo la cartella con i file statici
app.use(express.static('public'));

// definiamo la prima rotta --> HOME
app.get('/', (req, res) =>{
    res.send ('benvenuti nella mia home')
});

// avviamo il server mettendolo in ascolto nella porta indicata
app.listen(port, () =>{
    console.log(`la porta di utilizzo è ${port}`)
})

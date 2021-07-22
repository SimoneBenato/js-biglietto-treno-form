// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var btnGenera = document.getElementById("calcolaPrezzo");

btnGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fascia_eta").value;

        var price;
        if (fasciaEta == 'minorenne') {
            price = ((km * 0.21) * 0.8);
        } else if (fasciaEta == 'over65') {
            price = ((km * 0.21) * 0.6);
        } else if (fasciaEta == 'maggiorenne') {
            price = (km * 0.21);
        }

        var codicePrenotazione = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
        var numeroCarrozza = Math.floor(Math.random() * (61 - 1) ) + 1;
        
        document.getElementById("uno").innerHTML = nome
        document.getElementById("due").innerHTML = km
        document.getElementById("tre").innerHTML = fasciaEta
        document.getElementById("quattro").innerHTML = price.toFixed(2);
        document.getElementById("cinque").innerHTML = codicePrenotazione;
        document.getElementById("sei").innerHTML = numeroCarrozza;

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "block";
    }
)

var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener("click",
    function() {
        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "none";

        // svuoto gli imput
        document.getElementById("nome").value = ""
        document.getElementById("km").value = "";
        document.getElementById("fascia_eta").value = "";
    }
)


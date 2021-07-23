// Creiamo un finto biglietto del treno con:
var btnGenera = document.getElementById("calcolaPrezzo");

btnGenera.addEventListener("click",
    function() {
        // Nome passeggero
        var nome = document.getElementById("nome").value;

        // Categoria selezionata dall'utente
        var fasciaEta = document.getElementById("fascia_eta").value;

        // Prezzo calcolato
        var km = document.getElementById("km").value;
        var price;
        if (fasciaEta == 'minorenne') {
            price = ((km * 0.21) * 0.8);
        } else if (fasciaEta == 'over65') {
            price = ((km * 0.21) * 0.6);
        } else if (fasciaEta == 'maggiorenne') {
            price = (km * 0.21);
        }

        // Codice treno (numero casuale tra 90000 e 100000 escluso)
        var codiceTreno = Math.floor(Math.random() * (100000 - 90000) ) + 90000;

        // Numero carrozza
        var numeroCarrozza = Math.floor(Math.random() * (61 - 1) ) + 1;
        
        document.getElementById("nomePasseggero").innerHTML = nome;
        if (fasciaEta == "minorenne" || fasciaEta == "over65") {
            document.getElementById("offerta").innerHTML = ("Sconto ") + fasciaEta;
        } else {
            document.getElementById("offerta").innerHTML = fasciaEta;
        }
        document.getElementById("price").innerHTML = price.toFixed(2);
        document.getElementById("codiceTreno").innerHTML = codiceTreno;
        document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;

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
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia_eta").value = "";
    }
)

// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

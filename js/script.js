const chilometri = Number.parseFloat(prompt('Inserisci i chilomentri da percorrere'), 10);
const età = Number.parseInt(prompt('Inserisci la tua età'), 10);


const prezzoBiglietto = (chilometri * 0.276);

const scontoMinorenni = (prezzoBiglietto/100)*21;
const scontoOver = (prezzoBiglietto/100)*42;

const prezzoScontatoMinori= prezzoBiglietto-scontoMinorenni;
const prezzoScontatoOver= prezzoBiglietto-scontoOver;

if (età < 18) {    
    console.log('questo è il prezzo del tuo biglietto' + prezzoScontatoMinori.toFixed(2), prezzoScontatoMinori);
}else if (età > 65){    
    console.log('questo è il prezzo del tuo biglietto' + prezzoScontatoOver.toFixed(2), prezzoScontatoOver);
}else{
    console.log('Questo è il prezzo del tuo biglietto' +' '+  prezzoBiglietto.toFixed(2), prezzoBiglietto);
}


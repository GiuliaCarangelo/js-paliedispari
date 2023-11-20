// Pari e Dispari:

//  e inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)

// Dichiariamo chi ha vinto.

// Palindroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.



// L’utente sceglie pari o dispari

// Il pc genera un numero casuale compreso tra 1 e 5

function numGen(minValue, maxValue){
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

// Stampiamo in console il numero scelto dal pc

console.log(numGen(1, 5));
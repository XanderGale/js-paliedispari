// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di scegliere tra pari o dispari.
let userEvenOrOdd = prompt('Scegli: Pari o dispari?');

// Chiedo all'utente di inserire un numero da 1 a 5.
let userNumber = parseInt( prompt('Scrivi un numero da 1 a 5') );

// Genero un numero random per il pc.
let pcNumber = getRndInteger(1, 5);

// Sommo il numero del pc e quello dell'utente
let sommaNumeri = pcNumber + userNumber;



// Valuto se il numero è pari o dispari
let userNumberEvenOrOdd = sommaEvenOrOdd(sommaNumeri);
console.log(sommaNumeri);

if (userNumberEvenOrOdd === 'pari' && userEvenOrOdd === 'pari') {
    alert('Hai vinto!');
} else if (userNumberEvenOrOdd === 'dispari' && userEvenOrOdd === 'dispari'){
    alert('Hai vinto');
} else {
    alert('Hai perso!');
}

console.log(userEvenOrOdd);
console.log(userNumberEvenOrOdd);
console.log(pcNumber);
console.log(userNumber);


// FUNCTIONS

// Valuto se la somma è pari o dispari
function sommaEvenOrOdd(number){
    let output;

    if (number % 2 === 0){
        output = 'pari';
    } else {
        output = 'dispari';
    }

    return output;
}

// Genero un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


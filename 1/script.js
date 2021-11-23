// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindrome

// Chiedo la parola all'utente
let userWord = prompt('Inserisci una parola');
console.log(userWord);

// Verificare se è palindroma.
let userWordPalindromeOrNot = palindromeOrNot(userWord);

// Output
if (userWordPalindromeOrNot === true){
    alert('La tua parola è palindroma.');
} else{
    alert('La tua parola non è palindroma.');
}

// FUNCTIONS

// Stabilisce se una parola inserita è palindrome
// word -> parola da verificare
// 
// return: una stringa in array. Se pari la stringa sarà 'la tua parola è palindrome' altrimenti 'la parola inserita non è palindrome'
function palindromeOrNot(word) {
    console.log('dentro funzione ', word);

    let reversedString = "";

    for ( let i = word.length - 1; i >= 0; i--){
        reversedString += word[i];
    }

    console.log(reversedString);
    

    let isPalindrome;
    if (reversedString === word){
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;
}




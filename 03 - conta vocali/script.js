/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const returnVocals = (string) => {
    const vocals = ["a", "e", "i", "o", "u"];

    let result = "";
    let count = 0;

    for (i = 0; i < string.length; i++) {

        for (j = 0; j < vocals.length; j++) {

            if (string[i] === vocals[j]) {

                result = result + string[i] + " ";

                count++;
            }
        }
    }

    return count;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(returnVocals(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
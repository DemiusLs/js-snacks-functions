/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.



/**
 * Dato un array e una lettera, controlla se gli elementi dell'array iniziano con quella lettera 
 * e li restituisce in un array
 *
 * @param {array} array 
 * @param {array} letter 
 * @returns {array} result
 */
const startsWith = (array, letter) => {

    let result = [];

    for (i = 0; i < array.length; i++) {

        if (array[i][0].toUpperCase() === letter.toUpperCase()) {

            result.push(array[i])
        }


    }
    return result;

}



// Invoca la funzione qui e stampa il risultato in console

console.log(startsWith(names, "a"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
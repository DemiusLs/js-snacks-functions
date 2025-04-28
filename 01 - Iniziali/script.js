/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


/**
 * Dato un array, restituisce il primo carattere di ogni elemento
 *
 * @param {array} arrayn 
 * @returns {array} arrayLetter
 */
const initials = (arrayn) => {

    const result = [];

    for (i = 0; i < arrayn.length; i++) {
        //prendo il carattere in posizione 0 della parola ad indice i nell'array        
        result.push(arrayn[i][0])
    }
    return result;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(initials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
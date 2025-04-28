/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Marco';


// Dichiara la funzione qui.


const saluto = (string) => {
    const string2 = "";
    const date = new Date();
    let ore = date.getHours();

    if (ore < 13) {

        string2 = "Buongiorno"

    } else if (ore < 17) {

        string2 = "Buon pomeriggio";

    } else {
        string2 = "Buona sera";
    }

    return `${string2} ${string} `;

}


// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
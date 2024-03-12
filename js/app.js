/* Si utilizza l'operatore modulo per verificare se un numero compreso tra 1 e 100 è un multiplo di 3 e/o un multiplo di 5.
   L'operatore modulo calcola il resto della divisione di un numero (num) per x.
   Se il resto della divisione di num per x è zero allora num è un multiplo di x.
*/

/*La costante N è la lunghezza della sequenza di numeri da analizzare
 i è la variabile contatore 
 Il for viene ripetuto N volte
*/
const N=100;  // numero
for (let i=0; i<N; i++) {   // costrutto for: inizializzazione del contatore; condizione; incremento del contatore di un'unità
     let num = i+1;    // numero che varia da 1 a 100
     let resto3=num % 3;  // numero: resto della divisione di num per 3
     let resto5=num % 5;  // numero: resto della divisione di num per 5
     // Se le variabili resto3 e resto5 sono entrambe nulle allora num è multiplo sia di 3 che di 5
     /* Nella condizione del primo if si utilizza l'operatore logico AND per verificare se num è multiplo sia di 3 che di 5
        L'espressione logica risulterà vera solo nel suddetto caso
        L'espressione risultà falsa se almeno uno dei due enunciati è falso. Ci sono tre possibilità, il numero è un multiplo di 3, 
        oppure il numero è un multiplo di 5 oppure nessuno dei due.
         */
     if (resto3===0 && resto5===0)      // se la condizione è vera allora num è multiplo sia di 3 che di 5
           console.log('FizzBuzz');
     else  if (resto3===0)   // essendo l'if esterno falso, se l'if interno è vero, allora il numero non può essere multiplo di 5, per cui sarà multiplo solo di 3
                console.log('Fizz');
           else if (resto5===0)  // essendo i primi due if entrambi falsi, restano solo due possibilità, il numero è multiplo di 5 oppure non è multiplo nè di 3 nè di 5
                        console.log('Buzz')  // se l'if attuale è vero allora il numero è multiplo di 5
                else console.log(num); // essendo tutti gli if falsi il numero non è nè multiplo di 3, nè multiplo di 5                                                      
}



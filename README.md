# M4-D6
# Esercizio

## 💾 DATABASE UTENTI CON FILTRO

### Usa bootstrap per creare un layout VELOCE, concentrati sulla parte in JS.

You are creating a frontend application that displays users received from an API and filter them nicely.

Stai creando il frontend di un’applicazione che mostra gli utenti provenienti da un API e li filtra.

Questi sono i tuoi compiti:

– Mostra tutti gli utenti in una tabella partendo da questo API. Ricorda di usare ASYNC AWAIT!
`https://jsonplaceholder.typicode.com/users`
– Crea un dropdown con tre opzioni: “nome”, “username” e “email. Il dropdown sarà la prima parte del tuo filtro.



—

1. Crea un input di testo. Quando l’utente scrive qualcosa in questo input, la risposta dell’API dovrebbe venir filtrata e renderizzata usando sia il valore dell’input che l’opzione selezionata nel dropdown.
2. Crea un funzione che crei una lista di nomi dalla lista di utenti. Esegui questa funziona al click di un bottone.
3. Crea una funzione che crei, dall’array di utenti, un array di indirizzi in formato stringa. Segui l’esempio:

—

“`
{ “street”: “Victor Plains”, “suite”: “Suite 879”, “city”: “Wisokyburgh”, “zipcode”: “90566-7771”, “geo”: { “lat”: “-43.9509”, “lng”: “-34.4618”}//Should become “Victor Plains, Suite 879, Wisokyburgh (90566-7771)”
“`

—

### EXTRA:

– Aggiungi un bottone ad ogni utente nella tabella che porti ad una pagina dettagli. Usa questo endpoint per raccogliere le informazioni relative ad un utente specifico. `https://jsonplaceholder.typicode.com/users/id_goes_here`
– Aggiungi un bottone che ordini gli utenti per nome in senso ascendente E discendente. NON DUE BOTTONI, SOLO UNO!
– Usa Google Maps per mostrare la posizione degli utenti. Puoi usare l’iframe della tab “share”

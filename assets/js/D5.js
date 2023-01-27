const first = document.querySelector(".firstCol");
const second = document.querySelector(".secondCol");
const third = document.querySelector(".thirdCol");
const fourth = document.querySelector(".fourthCol");

// risolviamo la fetch con il metodo dei .then() e .catch()

/*cosa faccio quando l'operazione va a buon fine?
        ok, abbiamo qualcosa!
        finiremo nel .then() quando l'operazione È FINITA e È ANDATA A BUON FINE
        qui dentro ho la Response con cui lavorare!
        la response è il parametro di then!*/

/*res è la RESPONSE del SERVER
        un oggetto con tante proprietà, le più importanti che andremo a valutare
        sono "ok" e "status"
        "ok" ci restituisce un booleano con l'outcome dell'operazione
        "status" ci torna il codice numerico dell'operazione*/

//trasformiamo il body in un oggetto SOLO se la chiamata è andata a buon fine!
//finiremo qui se la chiamata ha contattato il server, ma c'è stato un problema nella risposta!
const testFetchFUn = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then(function (res) {
      console.log("questa è la RESPONSE del server!", res);
      if (res.ok) {
        return console.log("res.json stampato", res.json()); //<-- un metodo che trasforma lo stream del body in un oggetto!
      } else {
        console.log("Qualcosa è andato storto con la nostra chiamata!");
      }
    })
    .then(function (data) {
      console.log("qua dovrebbe esserci qualcosa",data); // <-- data sono i dati che cercavamo fin dall'inizio! qua manipolo il dom...
    })
    .catch(function (err) {
      console.log("È successo un errore", err);
    });
};

async function getSong() {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Imagine%20Dragons");
    const data = await response.json();
    const song = data.data.find((song) => song.title === "Radioactive");
    const albumCover = song.album.cover_medium;
    const songNAme = song.title;
    // document.getElementById("album-cover").src = albumCover;
    // document.getElementById("song-name").innerText = songName;
}
getSong();

/* cosa faccio quando l'operazione NON va a buon fine?
      finiremo nel .catch() quando l'operazione È FINITA ma NON È ANDATA A BUON FINE
      finiamo qui in una fetch() se abbiamo un errore di connettività, o un errore generico*/

const nomeACaso = () => console.log("chiamata di fetch per test", fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=dreamTheater"));
nomeACaso();

// const countUntilThreePromise = function () {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         console.log('ho contato fino a 3!')
//         resolve('evviva!') // la Promise è finita bene, proseguirò nel blocco .then()
//         //   reject('errore generico') // c'è stato un errore nella Promise, finisco nel .catch()
//       }, 3000) // aspetto 3 secondi
//     })
//   }

// const start3 = function () {
//     countUntilThreePromise()
//       .then(function (message) {
//         // .then() è il contenitore per il codice che verrà eseguito se la Promise
//         // verrà RISOLTA (resolve())
//         console.log('fatto! abbiamo ottenuto questo:', message)
//       })
//       .catch(function (err) {
//         // catch() è il contenitore per il codice che verrà eseguito se la Promise
//         // verrà RIFIUTATA (reject())
//         // di solito qui si gestiscono gli errori
//         console.log("c'è stato un errore, il suo tipo é:", err)
//       })
//     // il .then() aspetterà la fine della Promise prima di continuare l'esecuzione del codice contenuto al proprio interno
//   }

// const start4 = async function () {
//   try {
//     await countUntilThreePromise(); // await "metterà in pausa" l'esecuzione del codice
//     console.log("fatto!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// window.onload = start3

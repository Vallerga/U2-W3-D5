// Random Card Section1

// fetch used on section2
async function firstFetch() {
  const fetchSec1 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
  const jsonResFirst = await fetchSec1.json();


  // generate random card
  const randomNum = [];
for (i = 0; i < 4; i++) {
  let checker = Math.floor(Math.random() * 24); // <--- potrei rendere dinamico il numero in base al fetch mettendo una variabile al post di 24
  while (randomNum.includes(checker)) {
    checker = Math.floor(Math.random() * 24); // <--- potrei rendere dinamico il numero in base al fetch mettendo una variabile al post di 24
  }
  randomNum[i] = checker;
}
console.log(randomNum);


  // card 1
  const img1 = document.querySelector(".firstCol img");
  img1.src = jsonResFirst.data[randomNum[0]].album.cover_big; // load img
  const album1 = document.querySelector(".firstCol h5");
  album1.innerText = jsonResFirst.data[randomNum[0]].album.title; // load album
  const author1 = document.querySelector(".firstCol p");
  author1.innerText = jsonResFirst.data[randomNum[0]].title_short; // load title
  const link1 = document.querySelector(".firstCol a");
  link1.href = jsonResFirst.data[randomNum[0]].artist.link; // load link

  // card 2
  const img2 = document.querySelector(".secondCol img");
  img2.src = jsonResFirst.data[randomNum[1]].album.cover_big; // load img
  const album2 = document.querySelector(".secondCol h5");
  album2.innerText = jsonResFirst.data[randomNum[1]].album.title; // load album
  const author2 = document.querySelector(".secondCol p");
  author2.innerText = jsonResFirst.data[randomNum[1]].title_short; // load title
  const link2 = document.querySelector(".secondCol a");
  link2.href = jsonResFirst.data[randomNum[1]].artist.link; // load link

  // card 3
  const img3 = document.querySelector(".thirdCol img");
  img3.src = jsonResFirst.data[randomNum[2]].album.cover_big; // load img
  const album3 = document.querySelector(".thirdCol h5");
  album3.innerText = jsonResFirst.data[randomNum[2]].album.title; // load album
  const author3 = document.querySelector(".thirdCol p");
  author3.innerText = jsonResFirst.data[randomNum[2]].title_short; // load title
  const link3 = document.querySelector(".thirdCol a");
  link3.href = jsonResFirst.data[randomNum[2]].artist.link; // load link

  // card 4
  const img4 = document.querySelector(".fourthCol img");
  img4.src = jsonResFirst.data[randomNum[3]].album.cover_big; // load img
  const album4 = document.querySelector(".fourthCol h5");
  album4.innerText = jsonResFirst.data[randomNum[3]].album.title; // load album
  const author4 = document.querySelector(".fourthCol p");
  author4.innerText = jsonResFirst.data[randomNum[3]].title_short; // load title
  const link4 = document.querySelector(".fourthCol a");
  link4.href = jsonResFirst.data[randomNum[3]].artist.link; // load link
}
window.onload = firstFetch();

// Preferit Song Card Section2

// fetch used on section2
async function secondFetch() {
  const fetchSec2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
  const jsonResSecond = await fetchSec2.json();

  // preferit song card
  const preferImg = document.querySelector(".preferitCard img");
  preferImg.src = jsonResSecond.data[6].album.cover_big; // load img
  const preferTitle = document.querySelector(".preferitCard h5");
  preferTitle.innerText = jsonResSecond.data[6].album.title; // load title
  const preferAlbum = document.querySelector(".preferitCard p");
  preferAlbum.innerText = jsonResSecond.data[6].title_short; // load album
  const preferAuthor = document.querySelector(".preferitCard a");
  preferAuthor.src = jsonResSecond.data[6].artist.link; // load album
}
window.onload = secondFetch();

// selettori usati per far pratica la parte di codice vera inizia dopo

const first = document.querySelector(".firstCol");
const second = document.querySelector(".secondCol");
const third = document.querySelector(".thirdCol");
const fourth = document.querySelector(".fourthCol");
const trackimg1 = document.querySelector(".trackImg1");

//const testFetchFUn = function () {};

// prima funzione fetch funzionante!!

/* async function getSong() {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Imagine%20Dragons");
  console.log(response) // <--- la risposta come stringa non elaborata

  const jsonRes = await response.json();
  console.log(jsonRes)                    // <--- la risposta convertita in jason in struttura leggibile
  const arrayRisposta = jsonRes.data;
  const primaCanz = arrayRisposta[0];
  const album = primaCanz.album;
  const cover_small = album.cover_small; 
  console.log("coversmall link", cover_small);
  trackimg1.src = cover_small             // <--- questa è la risoluzione estesa passo dopo passo per esercizio
  console.log("vittoria!!!!", jsonRes.data[0].album.cover_small);
  trackimg1.src = jsonRes.data[0].album.cover_small;
}
  window.onload = getSong(); */

// VARI TEST PER CAPIRE FETCH

/* const nomeACaso = () =>
  console.log(
    "chiamata di fetch per test",
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=dreamTheater")
  );
nomeACaso(); */

/* cosa faccio quando l'operazione NON va a buon fine?
    finiremo nel .catch() quando l'operazione È FINITA ma NON È ANDATA A BUON FINE
    finiamo qui in una fetch() se abbiamo un errore di connettività, o un errore generico*/

// const gimmesonghete = () => {
//   const result = fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
//     .then((res) => {
//       if (res.ok) {
//         return res.json(); // <-- un metodo che trasforma lo stream del body in un oggetto!
//       } else {
//         console.log("Qualcosa è andato storto con la nostra chiamata!");
//       }
//     })
//     .then((arrayBrutto) => {
//       console.log("cosa cavolo sei", arrayBrutto);
//       console.log("ho trovato la cover");
//       return arrayBrutto.data[0].album.cover_big; // <---  qua carico il link sull'src
//     })

//     .catch(function (err) {
//       console.log("È successo un errore", err);
//     });
//   console.log("sei result?", result);
//   return result;
// };

// console.log(`la stringa è ${gimmesonghete()}`);
// console.log("picture", picture);
// console.log("trackimg", trackimg1.src);

// codice di prova
/* const song = jsonRes.data.find((song) => song.title === "Radioactive");
                const albumCover = song.album.cover_medium;
                const songNAme = song.title;
                document.getElementById("album-cover").src = albumCover;
                document.getElementById("song-name").innerText = songNAme;
              } */

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

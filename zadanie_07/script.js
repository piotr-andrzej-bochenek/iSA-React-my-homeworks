const list = document.getElementById('list');
const message = document.getElementById('message');
const button = document.getElementById('button');
const userNameInput = document.getElementById('user-name-input');

// 1. Pobierz dane z endpointu: https://jsonplaceholder.typicode.com/posts na kliknięcie przycisku #button.

// 2. Wyświetl dane w postaci listy w HTMLu wg. schematu:
// * title
//
//   description
//
// * title
//
//   description

// 3. Jeżeli pobieranie danych się powiedzie wyświetl informację w #message ile postów zostało pobrane.

// 4. Jeżeli pobieranie danych się nie powiedzie wyświetl informację w #message, że nastąpił błąd podczas pobierania.

// 5. Podczas pobierania danych zablokuj button i zmień jego tekst na "Loading...",
// a po udanym pobranu lub błędzie odblokuj go i zmień tekst ponowanie na "Pobierz albumy".

// 6 (*). Jeżeli zostanie wpisana nazwa użytkownika do #user-name-input
// to pobieranie danyh powinno pobierać tylko posty tego użytkownika / jeżeli input będzie pusty ma pobierać wszytskich,
// jeżeli taki użytkownik nie istnieje to powinnien się pokazać stosowny komunikat w #message
// Wykorzystaj endpoint do pobrania postów użytkownika i listy tych użytkowników:
// https://jsonplaceholder.typicode.com/posts?userId={id}
// https://jsonplaceholder.typicode.com/users
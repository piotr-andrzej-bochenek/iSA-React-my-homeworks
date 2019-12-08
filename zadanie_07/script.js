const list = document.getElementById('list');
const message = document.getElementById('message');
const button = document.getElementById('button');
const userNameInput = document.getElementById('user-name-input');

// 1. Pobierz dane z endpointu: https://jsonplaceholder.typicode.com/posts na kliknięcie przycisku #button.
let postsArray = [];

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(responseObject => {
        button.disabled = true;
        button.innerText = 'Loading...';
        postsArray = responseObject.map(postList);
        return postsArray;
    })
    .catch(() => message.innerText = 'Error, fetch failed')
    .finally(() => {
        button.disabled = false;
        button.innerText = 'Download albums';
        message.innerText = `Succesfully fetched ${postsArray.length} posts`;
    })
};

button.addEventListener('click', async(event) => {
    event.preventDefault;
    fetchPosts();
});

// 2. Wyświetl dane w postaci listy w HTMLu wg. schematu:
// * title
//
//   description
//
// * title
//
//   description

const postList = (post) => {
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.innerText = post.title;
    p.innerText = post.body;
    list.appendChild(h2);
    list.appendChild(p);
}

// 3. Jeżeli pobieranie danych się powiedzie wyświetl informację w #message ile postów zostało pobrane.
//DONE (line 22)

// 4. Jeżeli pobieranie danych się nie powiedzie wyświetl informację w #message, że nastąpił błąd podczas pobierania.
//DONE (line 18)

// 5. Podczas pobierania danych zablokuj button i zmień jego tekst na "Loading...",
//DONE (lines 13-14)

// a po udanym pobranu lub błędzie odblokuj go i zmień tekst ponowanie na "Pobierz albumy".
//DONE (lines 20-21)

// 6 (*). Jeżeli zostanie wpisana nazwa użytkownika do #user-name-input
// to pobieranie danyh powinno pobierać tylko posty tego użytkownika / jeżeli input będzie pusty ma pobierać wszytskich,
// jeżeli taki użytkownik nie istnieje to powinnien się pokazać stosowny komunikat w #message
// Wykorzystaj endpoint do pobrania postów użytkownika i listy tych użytkowników:
// https://jsonplaceholder.typicode.com/posts?userId={id}
// https://jsonplaceholder.typicode.com/users
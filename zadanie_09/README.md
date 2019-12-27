**Zadanie polega na rozbudowaniu wykonanej wczęsniej aplikacji z użyciem React'a**

Zadanie podzielono na 5 (+2 dla chętncyh) części (opis każdej poniżej).
Stwórz nową aplikację o nazwie `my-app` w folderze `zadanie_09`. 
Przekopjuj odpwiednie pliki by uzyskać stan aplikacji z zadania 8 (minimalny stan to część 1 z zadania 8).
Jeżeli nie wykonałeś zadania 8 to musisz co najmniej tą pierwszą część zrobić (jest to ważne by kązdy potrafił wykonać iterację w Reactcie) by wykonać to zadanie.

Punktacja: 
* część 1-2: po 0,5pkt
* część 3-5: po 1pkt
* część 6-7: po 0,5pkt

Termin wykonania: **25.01.2020**

### Część 1 - pobieranie danych

   Przenieś plik players.json do folder `public/data` i podmień import na pobieranie w componencie `App`.
    
   Użyj funkcji `fetch` do pobierania. Pobieranie wykonaj w odpowiedniej metodzie z cyklu życia komponentu.
   
   Aplikacja dla użytkownika nie powinna się zmienić. (wyświetla się ciągle tak jak na początku).

### Część 2 - refaktoryzacja

   Stwórz nowy komponent `Players`, w którym stworzymy identyczną tablicę (pamiętaj o folderze i odpowiednim exporcie). 
   Stan z zapisanym kolorem wyróżnienia powinien być też przeniesiony do tego komponentu.
   
   Zaimplementuj nowo uwtorzony komponent w `App.js` (pamiętaj o imporcie) i przekaż mu dane poprzez `props` (`<Players players={this.state.players}/>`).
   Przekazne dane podmień z tymi co znajdują się w stanie komponentu Players.
   
   Aplikacja dla użytkownika nie powinna się zmienić. (wyświetla się ciągle tak jak na początku).
   
### Część 3 - refaktoryzacja i props

   Stwórz nowy komponent `PlayerRow`, w którym wyłączymy tworzenie wiersza naszej tablicy. (w funkcji render powinien być zwracany tag `<tr>`).
   
   Zaimplementuj nowo uwtorzony komponent w `Players.js` (pamiętaj o imporcie) i przekaż mu dane do wyświetlenia oraz inforamcje o koloru wyróżnienia
   poprzez `props` (`<PlayerRow player={player} highlightColor={this.state.highlightColor} />`).
   
   W tym przypadku będziemy przekazywać dane tylko jednego playera podczas wykonywania pętli:
   
    {
        this.props.players.map(player => {
            return \wstaw komponent z wierszem i przekaż mu w propsach dane player'a\
        });
    }
    
   Aplikacja dla użytkownika nie powinna się zmienić. (wyświetla się ciągle tak jak na początku).
   
### Część 4 - formularz i dodawanie
   
   Stwórz w komponencie `Players` formularz z jednym polem tekstowym i przyciskiem "Dodaj". 
   
   Dodaj funkcje do obsługi dodawania kolejnego gracza. (`<form onSubmit={this.handleSubmit}>`). W funkcji nadpisz aktualny stan z dodatkowym graczem (`this.setState({players: .....})`).
   Punktacja nowego użytkownika powinna być generowana losowo od 0 do 200.
   
   Tips: możecie pobrać tablicę i dokonać zwykłego pusha lub możecie wykorzsytać spread. :)
   
### Cześć 5 - usuwanie

   W komponencie `PlayerRow` dodaj do każdego wiersza buttona z "X", który będzie służył do usuwania danego gracza.
   
   Dodaj funkcje w PlayerRow, która obsłuży kliknięcie przycisku (`<button onClick={() => this.onRemoveButtonClick(player.id)}>`).
   
   Wykorzystaj `props` by przesłać informacje o usuniętym graczu do komponentu `Players`.
   
   * dodaj nowy props do PlayerRow: `<PlayerRow onRemove={this.removePlayer}`
   * dodaj obsługę wyżej dodanej funkcji w Players: `removePlayer = id => { ..... }`
   * dodaj obslugę kliknięcia przycisku w PlayerRow: `onRemoveButtonClick = (id) => {this.props.onRemove(id)`
   
   Tips: usuwanie możecie wykonać poprzez filtrowanie i potem zapisywanie przefiltrowanej tablicy lub z użyciem np slice.
   
### Cześć 6 - routing i reużywalność

   Utwórz routing w aplikacji (zainstaluj paczkę react-router, dodaj komponent Router w App.js).
   
   Stwórz w App.js mini nawigacje z dwoma linkami ('Players' i 'New players'). Pamiętaj o komponencie `Link`. Nawigacja powinna być na górze strony.
   
   Pod ścieżką `players` powininen się wyświetlać komponent `Players`, natomiast pod ścieżka `newplayers` póki co nic.
   
   Dodaj w `public/data` nowy plik `new_players.json` z kolejnymi danymi (podobne, ale nie identyczne jak w `players.json`).
   Dodaj nowy stan (`newPlayers`) i pobieranie (`fetch`) w `App.js` by pobrać nowe dane.
   
   Do ścieżki `newplayers` dodaj komponent Players, ale z przekazniem mu nowej tablicy. (`<Players players={this.state.newPlayers} />`)
   
   Akutlanie uzytkownik powinien widzieć dwie różne listy graczy i w każdej z nich może dodawać i usuwać graczy oraz zmieniać kolor wyróżnienia.
   
### Cześć 7 - refaktoryzacja ciąg dalszy

   Wyciągnij formularz do nowego komponentu `PlayerForm`. 
   Przenieś logikę usuwania / dodawania do `App.js` (poziom wyżej, tak by stan był zmieniany w jednym miejscu).
   Zmień komponenty, które nie potrzebują stanu aplikacji na zwykłe funkcje zamiast class. (Players, PlayerRow).
   

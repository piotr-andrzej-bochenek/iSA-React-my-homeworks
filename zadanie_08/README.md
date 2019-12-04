**Zadanie polega na wykonaniu prostej aplikacji z użyciem React'a**

Zadanie podzielono na 6 części (opis każdej poniżej). Wykonujemy zadanie na własnych branchach w folderze **zadanie_8**. Pamiętajcie by nie zacomittować node_modules!

Punktacja: 1 część to 0,5pkt - maks 3pkt.

Termin wykonania: **21.12.2019 00:00**

### Część 1 - iteracja

   Stwórz nową aplikację używając create-react-app o nazwie my-app w folderze `zadanie_08`

   W folderze src utwórz plik players.js

   Wewnątrz pliku src/players.js umieść tablicę (array) players z 10 obiektami symbolizującym użytkowników - niech posiadają atrybuty: username typu string oraz points typu number (niech będą to liczby całkowite).

   Wyeksportuj domyślnie tablicę players z pliku src/players.js używając export default

   W pliku src/App.js zaimportuj tablicę z pliu src/players.js

   W metodzie render wyrenderuj tablicę HTMLową (<table>) zawierającą nagłówki Username oraz Points - w każdym wierszu wyświetl dane poszczególnych obiektów z tablicy zaimportowanej z pliku src/players.js

   Zacommituj rozwiązanie w repozytorium, opisująć dokładnie, co zostało zrobione.


### Część 2 - podsumowanie

   Korzystając z kodu z zadania 1. wyświetl w tablicy dodatkowy wiersz na samym dole, w którym w kolumnie z nagłówkiem Points znajdzie się liczba będąca sumą wszystkich punktów zdobytych przez graczy. W kolumnie Username w tym wierszu niech znajdzie się etykieta Total

   Poniżej tego wiersza dodaj kolejny wiersz, w którym wyświetlimy analogicznie średnią punktów z etykietą Average


### Część 3 - wyróżnianie

   Jeżeli w pliku src/players.js nie posiadasz żadnego gracza z liczbą punktów większą niż 100, to dodaj jednego lub zmień punkty dla któregoś z już istniejących.

   W pliku src/App.js zmodyfikuj metodę render w taki sposób, żeby wiersze z graczami posiadającymi więcej niż 100 punktów były wyróżnione (np. posiadały czerwone tło i biały tekst)


### Część 4 - pobieranie danych ze stanu komponentu

   Utwórz w komponencie stan i zapisz w nim informację o aktualnie włączonym kolorze wyróżniania, np. state = { highlightingColor: "red" }

   Wykorzystaj tę informację zamiast koloru użytego w poprzednim zadaniu (this.state.hightlightingColor)


### Część 5 - interakcja

   Dodaj nad tabelką 2 przyciski z etykitami Red oraz Blue.

   Spraw, żeby kliknięcie w każdy z tych przycisków powodowało zmianę aktualnie używanego koloru wyróżnienia zawodników w tabelce. (this.setState({ highlightingColor: /* tutaj wstaw odpowiedni kolor */}))


### Część 6 - JS to JSON

   Zmień rozszerzenie pliku src/players.js na .json i zmień jego zawartość tak, żeby była zgodna z zasadami formatu JSON (przypominam o nazwach kluczy w podwójnym cudzysłowiu)

   Popraw import w pliku src/App.js - potrzebna będzie zmiana z from './players' na from './players.json'

   Upewnij się, że aplikacja cały czas działa.

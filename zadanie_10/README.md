**Zadanie polega na przećwieczeniu REST API**

Zadanie podzielono na 6 (+1 dla chętncyh) części (opis każdej poniżej). Wykonujemy zadanie na własnych branchach w folderze **zadanie_10**. 
Zadanie może być wykonane z użyciem React'a, ale nie musi ;)

Punktacja: 
* część 1-6: po 0,5pkt
* część 7: 1pkt

Termin wykonania: **08.02.2020**

### Część 1 - baza danych i odczyt danych

    Stwórz bazę danych w Firebase. Dodaj w niej pole todo i dodaj w nim jeden element z kluczami: task (string)  i done (boolean).
    Stwórz komponent ToDo w którym wyświetlisz tą listę.

### Część 2 - dodawania elementów do bazy

    Stwórz nowy komponent AddTask, który dołączysz do komponentu ToDo i w nim stwórz formularz z możliwością dodawania nowych elementów do bazy danych.
    Jedynie input, wartość done ustawia się zawsze na początku na false. Po tej akcji widok powinien się odświeżyć.
   
### Część 3 - usuwanie elementów z bazy

    Dodaj do każdego wiersza przycisk, który umożliwi usunięcie danego wiersza z bazy danych. 
    Po tej akcji widok powinien się odświeżyć.
   
### Część 4 - edycja done elementów z bazy

    Dodaj do każdego wiersza checkbox, który wskazuje czy zadanie ma klucz done ustawiony na true oraz po jego zmienie nastąpi update bazy danych.
    Dodaj do każdego wiersza przycisk, który umożliwi edycję poprzez zmianę na tekstu na input i zmianę przycisku edycji na przycisk zapisu.
    Wiersz powinien być odrębnym komponentem.Po tej akcji widok powinien się odświeżyć.
   
### Cześć 5 - logowanie

    Dodaj możliwość zalogowania się i rejestracji do Twojej bazy danych. Stwórz odpowiednie formularze i dodaj przycisk Wyloguj. 
    Formularze logowania i rejestracji powinny być odrębnymi komponentami, powinny być widoczne gdy użytkownik nie jest zalogowany. 
    Natomiast lista nie powinna być widoczna dla nie zalogowanych. Przycisk wyloguj powinien się pokazać w prawym górnym rogu po zalogowaniu się.
   
### Cześć 6 - walidacja bazy danych i formularza

    Dodaj walidację do bazy danych i formularzy. Done może być tylko boolean a task może być tylko stringiem. 
   
### Cześć 7 * - zdjęcia

    Dodaj możliwość dodawania zdjęcia do każdego zadania - dodatkowy input typu file w formularzu oraz widoczne zdjęcie w każdym wierszu.
    Zdjęcie nie jest obowiązkowe, więc dodaj odpowiedni placeholder.


   

**Zadanie polega na przećwiczeniu wszytskich poznanych elementów programowania**

Zadanie dla chętnych na ekstra punkty. 

Opis zadania:
Stwórz w Reactcie (aplikacja `my-app` w folderze `extras/zadanie_02`) komponent 'Progress Bar' zgodnie z najlepszymi praktykami.

Progress bar powinien posiadać:
 * pasek stanu (z zakolorowaną częścią w zależności od wartości stanu, inicjalna wartość 50%)
 * wartość procentową napisaną nad paskiem stanu
 * pasek stanu powinien zmieniać kolor w zależności od wartości (0-30% czerwony, 30-60% żółty, 60%-80% jasnozielony, >80% zielony)
 
 Wersja 1: 
 * przycisk na lewo od paska stanu do zmiejszania wartości (o 5%)
 * przycisk na prawo od paska stanu do zwiększania wartości (o 5%)
 * przyciski powinny się blokować jak zostanie osiągniete 0 - przycik zmniejszania, 100% - przycik zwiększania
 
 
 Wersja 2: 
 * listę zadań nad sobą w formacie nazwa - checkbox, np.: Zrobic obiad [ ]
 * zadania powinny być pobrane z folderu public (plik json z zadaniami jest w folderze zadania)
 * po zaznaczeniu lub odznaczeniu checkboxa zadania wartość na progress barze się zmienia (procent zaznaczonych zadań)
 

Przykładowy progress bar: https://react-bootstrap.github.io/components/progress/

Dodatkowa punktacja: **3-4 pkt**
 * własne stylowanie 0,5pkt
 * wykonanie paska zadań w Reactice (z odpowiednią zrefkatorowanym kodem) 1pkt
 * wersja 1: 0,5pkt / wersja 2: 1,5pkt
 * unit testy dla komponentów 1pkt

Termin wykonania: **08.02.2020 00:00**

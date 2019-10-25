/****************************************************************************************************
 1. Dodaj poprawnie plik 'script.js' do pliku index.html. Wyświetl w konsoli: 'Poprawnie dodany skrypt';

 2. Napisz funkcję, która przyjmuje 2 argumenty i zwraca większy z nich.
 Input: 2, 5        Output: 5
 Input: 2, -5       Output: 2
 Input: 'aaa', -5   Output: 'argumenty to nie liczby`

 3. Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: '4.1.1: Kamil'
 Input: uppercaseFirstLetter(12)      Output: '4.1.2: to nie jest string'

 4. Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 Input: labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
 Output: 'a) Garfield b) elephant c) flying'

 5. Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz.
 Output: 'Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'

 6. Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$

 7. Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output:
 'Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 8. Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nie znany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero'

 9*. Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output:
 *
 * *
 * * *
 * * * *
 * * * * *

 */

//subtask 3.1
console.log('Subtask 3.1');
console.log('Script added properly');
console.log('');

//subtask 3.2
console.log('Subtask 3.2');
function twoNumbersComparator (num1, num2) {
    const firstNumber = num1;
    const secondNumber = num2;
    
    console.log(`First compared argument is: ${firstNumber}`);
    console.log(`Second compared argument is: ${secondNumber}`);

    if (typeof firstNumber == 'number' && typeof secondNumber == 'number') {
        if (firstNumber > secondNumber) {
            console.log(`After carefully comparing ${firstNumber} with ${secondNumber} I conclude, that ${comparisionResult = firstNumber} is bigger.`);
            return comparisionResult;
        } else {
            console.log(`After carefully comparing ${firstNumber} with ${secondNumber} I conclude, that ${comparisionResult = secondNumber} is bigger.`);
            return comparisionResult;
        }
    } else {
        console.log(`After carefully comparing ${firstNumber} with ${secondNumber} I conclude, that ${comparisiResult = 'at least one of them is not a number'}`);
        return comparisionResult;
    }
};

twoNumbersComparator(2,5);
twoNumbersComparator(2,-5);
twoNumbersComparator('aaa',5);
console.log('');

//subtask 3.3
console.log('Subtask 3.3');

function uppercaseFirstLetter(givenString) {
    if (typeof givenString == 'string') {
        const firstLetterUppercased = givenString.slice(0,1).toUpperCase() + givenString.slice(1);
        const result = firstLetterUppercased.toString()
        console.log(`${result} is a string with upper cased first letter from given string "${givenString}".`);
        return result;
    } else {
        const result = `This argument (${givenString}) is not a string.`;
        console.log(result);
        return result;
    }
    
};

uppercaseFirstLetter('kamil');
uppercaseFirstLetter(12);
console.log('');

//subtask 3.4
console.log('Subtask 3.4');
const labirynth = {
    animals: [
        { name: 'Pluto', species: 'dog' },
        { name: 'Garfield', species: 'cat' },
        { name: 'Simba', species: 'lion' },
        { name: 'Maniek', species: 'elephant' }
    ],
    nonAnimals: [
        { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
        { name: 'C3PO', species: 'robot', skills: ['talking'] }
    ],
    showAnimals: function() { console.log(this.animals) },
    showNonAnimals: function() { console.log(this.nonAnimals) }
   };

console.log(`a) '${labirynth.animals[1].name}'\nb) '${labirynth.animals[3].species}'\nc) '${labirynth.nonAnimals[0].skills[1]}'`);
console.log('');

//subtask 3.5
console.log('Subtask 3.5')
function FizzBuzz () {
    const fizz = "Fizz";
    const buzz = "Buzz";
    let fizzBuzzOutput = "'";
    for (let i = 0; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {fizzBuzzOutput += (fizz + buzz + " ")}
        else if (i % 3 === 0 ) {fizzBuzzOutput += (fizz + " ")} 
        else if (i % 5 === 0 ) {fizzBuzzOutput += (buzz + " ")}
    };
    fizzBuzzOutput = fizzBuzzOutput.substring(0, fizzBuzzOutput.length - 1);
    fizzBuzzOutput += "'";
    console.log(fizzBuzzOutput);
    return fizzBuzzOutput;
};

FizzBuzz();
console.log('');

//subtask 3.6
console.log('Subtask 3.6');

function signMultiplier (sign, multiplier) {
    let signMultiplyingOutput = '';
    if (typeof sign == 'string' && typeof multiplier == 'number') {
        if (multiplier < 10) {
            for (let i = 0; i < multiplier; i++) {
                signMultiplyingOutput += sign + '-';
            };
        } else {
            for (let i = 0; i < 10; i++) {
                signMultiplyingOutput += sign + '-';
            };
        };
    };
    console.log(signMultiplyingOutput);
    return signMultiplyingOutput;
};

signMultiplier('$', 5);
signMultiplier('$', 17);

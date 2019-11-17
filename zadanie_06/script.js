// QUIZ na rozgrzewkę!!

var person = {
    name: "John",
    surname: "Doe",
    getFullName: function() {
        return this.name + ' ' + this.surname;
    }
};
//dany jest doctor, utworzony z persona
var doctor = Object.create(person);
//dany jest journalist, utworzony z persona
var journalist = Object.create(person);
//dany jest surgeon, utworzony z doctora
var surgeon = Object.create(doctor);
//dany jest remodelingSurgeon, utworzony z doctora
var remodelingSurgeon = Object.create(surgeon);
//remodelingSurgeonowi zmieniona zostaje metoda getFullName, by po wywołaniu zwracała Unknown
remodelingSurgeon.getFullName = function() {
    return "Unknown"
};
//dany jest perSurgeon, utworzony z surgeona
var petSurgeon = Object.create(surgeon);
//zmiana imienia surgeona
surgeon.name = "Dana";
//zmiana imienia remodelingSurgeon na Scully
remodelingSurgeon.name = "Scully";
//Prototyp doctora (person) ma zmienione surname na Fox:
Object.getPrototypeOf(doctor).surname = "Fox";
//Prototyp journalista (person) ma zmienione surname na Parker (co nadpisuje powyższą zmianę)
Object.getPrototypeOf(journalist).surname = "Parker";
//Prototyp surgeona (który jest prototypem petSurgeona), czyli doctor, ma zmienione nazwisko na Hide
Object.getPrototypeOf(Object.getPrototypeOf(petSurgeon)).surname = "Hide";
// Try to guess results
console.log('person',            person.getFullName(),            "John Parker");
console.log('doctor',            doctor.getFullName(),            "John Hide");
console.log('journalist',        journalist.getFullName(),        "John Parker");
console.log('surgeon',           surgeon.getFullName(),           "Dana Hide");
console.log('remodelingSurgeon', remodelingSurgeon.getFullName(), "Unknown");
console.log('petSurgeon',        petSurgeon.getFullName(),        "Dana Hide");


// let's code!

var PLASTIC_BAG_CAPACITY = 3500;

// AD 1 - zaimplementuje function constructor dla produktów 'new NAZWA(price, amount)'
// if bag has a capacity of 3500 and one watermelon takes 1500 units of it,
// IMHO the proper word is volume

class Product {
    constructor (price, volume) {
        this.price = price,
        this.volume = volume
    }; 
};

class Fruit extends Product {
    constructor(price, volume) {
        super(price, volume);
    };
};

class Dairy extends Product {
    constructor(price, volume) {
        super(price, volume);
    };
};

class Fish extends Product {
    constructor(price, volume) {
        super(price, volume);
    };
};

var watermelon = new Fruit(12.90, 1500);
var apple = new Fruit(1.90, 200);
var cheese = new Dairy(2.39, 100);
var milk = new Dairy(3.19, 1000);
var balticCod = new Fish(2.28, 100);
var salmon = new Fish(3.28, 100);

// AD 2 - zaimplementuje function constructor dla shoppingCart
var shoppingCart = new ShoppingCart();

// AD 3
shoppingCart.addProduct(watermelon, 2);
shoppingCart.addProduct(apple, 10);
shoppingCart.addProduct(cheese, 2);
shoppingCart.addProduct(milk, 1);
shoppingCart.addProduct(balticCod, 7);
shoppingCart.addProduct(salmon, 8);

// AD 4
console.log('Is 60PLN enough?', shoppingCart.isEnoughMoney(60)); // false
console.log('Is 80PLN enough?', shoppingCart.isEnoughMoney(80)); // false
console.log('Is 100PLN enough?', shoppingCart.isEnoughMoney(100)); // true
console.log('Total price of added products:', shoppingCart.getTotalPrice()); // 94.97
console.log('Total weight of added products:', shoppingCart.getTotalWeight()); // 7700

// AD 5
console.log('Do I have a fish?', shoppingCart.containFish()); // true

// AD 6
console.log('How many plastic bags I need:', shoppingCart.getNumberOfNeededPlasticBags()); // 3


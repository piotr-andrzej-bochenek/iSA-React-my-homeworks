// EX 3. Let's write some tests for class methods
//  a) Something is missing for `getNextOrderNumber`. What will happened if client does not have any order as undefined 🙀
//     Write a test which verifies how it should behave, and then fix it in code! 
//     The correct order number for `undefined` orders should be "ISA-#1" 
//  b) `calculateDiscount` needs some tests - please write them. Notice the `ClientService` construtor!
//  c) New requirements arrived! Now if client type is `INTERNAL` he has extra +15% discount! (sums up with existing discounts)
//      Write test first, and then implement this new logic in `calculateDiscount` method (it is 1 extra `if` 😉)
//  d) Let's write 2-3 basic tests for `calculateNewOrderValue`

describe('getNextOrderNumber', () => {
    test('should generate correct number if client already made 2', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 200],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === 'ISA-#3') {
            return;
        } else {
            throw new Error(`Assertion failed! Actual="${actual}", where should be "ISA-#3"`);
        }
    });

    test('should generate correct number if orders are undefined', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: undefined,
            type: 'EXTERNAL'
        };

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === 'ISA-#1') {
            return;
        } else {
            throw new Error(`Assertion failed! Actual="${actual}", where should be "ISA-#1"`);
        }
    });

    test('should generate correct number if client has zero orders', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === 'ISA-#1') {
            return;
        } else {
            throw new Error(`Assertion failed! Actual="${actual}", where should be "ISA-#1"`);
        }
    });
});

describe('calculateDiscount', () => {
    test('should return 0 for orders less than 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 50, 100, 20],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if(actual === 0) {
            return;
        } else {
            throw new Error(`Assertion failed. Actual="${actual}", where it should be "0"`);
        }
    });

    test('should return 0.1 for orders equal 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [500],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.1) {
            return;
        } else {
            throw new Error(`Assertion failed. Actual="${actual}", where it should be "0.1"`);
        }
    });

    test('should return 0.1 for orders higher than 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 500, 100, 200],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if(actual === 0.1) {
            return;
        } else {
            throw new Error(`Assertion failed. Actual="${actual}", where it should be "0.1"`);
        }
    });
});

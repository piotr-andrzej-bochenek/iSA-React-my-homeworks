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
    test('should return 0 for external client with orders less than 500', () => {
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

    test('should return 0 for internal client with orders less than 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 50, 100, 20],
            type: 'INTERNAL'
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

    test('should return 0.1 for external client with orders equal 500', () => {
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

    test('should return 0.25 for internal client with orders equal 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [500],
            type: 'INTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.25) {
            return;
        } else {
            throw new Error(`Assertion failed. Actual="${actual}", where it should be "0.25"`);
        }
    });

    test('should return 0.1 for external client with orders higher than 500', () => {
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

    test('should return 0.25 for internal client with orders higher than 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 500, 100, 200],
            type: 'INTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if(actual === 0.25) {
            return;
        } else {
            throw new Error(`Assertion failed. Actual="${actual}", where it should be "0.25"`);
        }
    });
});

describe('calculateNewOrderValue', () => {
    test('should return unchaged orders value for external client purchase without discount', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [50, 250],
            type: 'EXTERNAL'
        };

        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);
        
        // act
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 300) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "300"`);
        }
    });

    test('should return unchaged orders value for internal client purchase without discount', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [50, 250],
            type: 'INTERNAL'
        };

        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        // act
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 300) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "300"`);
        }
    });

    test('should return 450 for external client with orders equal 500 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 200, 200],
            type: 'EXTERNAL'
        };

        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        // act
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 450) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "450"`);
        }
    });

    test('should return 375 for internal client with orders equal 500 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 200, 200],
            type: 'INTERNAL'
        };

        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        // act
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 375) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "375"`);
        }
    });

    test('should return 540 for external client with orders equal 600 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 100, 200, 200],
            type: 'EXTERNAL'
        };

        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        // act
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 540) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "540"`);
        }
    });

    test('should return 450 for internal client with orders equal 600 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 100, 200, 200],
            type: 'INTERNAL'
        };

        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        // act
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 450) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "450"`);
        }
    });
});
import {factorial} from './factorial';

describe('factorial test suite', () => {
    xit('Should return 0 if x is negative', () => {
        const result = factorial(-1);
        expect(result).toBe(0);
    })

    xit('Should return 1 if x  is 0', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    })

    xit('Should return 2 if x is 2', () => {
        const result = factorial(2);
        expect(result).toBe(2);
    })

    xit('Should return 6 if x is 3', () => {
        const result = factorial(3);
        expect(result).toBe(6);
    })

    xit('Should return 24 if x is 4', () => {
        const result = factorial(4);
        expect(result).toBe(24);
    })

    xit('Should return 120 if x is 5', () => {
        const result = factorial(5);
        expect(result).toBe(120);
    })

    xit('Should return 0 if x is 15', () => {
        const result = factorial(15);
        expect(result).toBe(0);
    })

})
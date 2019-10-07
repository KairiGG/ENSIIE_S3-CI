const Util = require('./math');

describe('isPrime', function () {

	test('Test factoriel de 0 => 1', () => {
    	expect(Util.factorial(0)).toBe(1);
	});

	test('Test factoriel de 2 => 2', () => {
		expect(Util.factorial(3)).toBe(6);
	});

	test('Test factoriel de 3 => 6', () => {
		expect(Util.factorial(3)).toBe(6);
	});

	test('Test factoriel de 3000', () => {
		expect(()=> {Util.factorial(3000)}).toThrow();
	});

	test('Test factoriel -10', () => {
		expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
	});
});



describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function () {

	test('Test somme d\'un nombre non-premier négatif, n=-10', () => {
    	expect(() => {Util.sumPrime(-10)}).toThrow('Unable to compute prime for n < 0');
	});

	test('Test somme d\'un nombre non-premier, n=26', () => {
    	expect(() => {Util.sumPrime(26)}).toThrow('n is not prime');
	});

	test('Test somme d\'un nombre premier, n=7', () => {
    	expect(Util.sumPrime(7)).toBe(17);
	});

	test('Test somme d\'un nombre premier, n=47', () => {
    	expect(Util.sumPrime(47)).toBe(328);
	});
});

describe('fizzBuzz', function () {

	test('Test FizzBuzz n < 1, n=0', () => {
    	expect(() => {Util.fizzBuzz(0)}).toThrow('n should be superior to 0');
	});

	test('Test FizzBuzz n < 1, n=-63', () => {
    	expect(() => {Util.fizzBuzz(-63)}).toThrow('n should be superior to 0');
	});

	test('Test FizzBuzz, n=15', () => {
		let expectedResult = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
    	expect(Util.fizzBuzz(15)).toStrictEqual(expectedResult);
	});

	test('Test FizzBuzz, n=30', () => {
		let expectedResult = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"
							, 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz"];
    	expect(Util.fizzBuzz(30)).toStrictEqual(expectedResult);
	});
});

describe('cipher', function () {
	test('Test cipher, phrase="Test Unitaire"', () => {
		expect(Util.cipher('Test Unitaire')).toBe('Uftu Vojubjsf');
	});

	test('Test cipher avec phrase contenant "z", phrase="Test Unitaire du z"', () => {
		expect(Util.cipher('Test Unitaire du z')).toBe('Uftu Vojubjsf ev a');
	});

	test('Test cipher avec phrase contenant "Z", phrase="Test Unitaire du Z"', () => {
		expect(Util.cipher('Test Unitaire du Z')).toBe('Uftu Vojubjsf ev A');
	});

	test('Test cipher avec phrase contenant des caractèresspéciaux, phrase="\'"&@=+!§^?,;é"', () => {
		expect(Util.cipher('\'"&@=+!§^?,;é')).toBe('\'"&@=+!§^?,;é');
	});

});

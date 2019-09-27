let Util = {};
Util.factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n >= 3000) {
        throw 'n too large'
    }

    if (n < 0) {
        throw 'n is negative'
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function (n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;

};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
	if(!Util.isPrime(n)) {
		throw 'n is not prime'
	}
    else {
    	let result = 0;
		for(let i = 2; i <= n; i++) {
    		if(Util.isPrime(i))
    			result += i;
    	}
    	return result;
    }
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
	if(n < 1)
		throw 'n should be superior to 0'
	let result = []
	for(let i=1; i < n + 1; i++)
		result.push((i%3?'':'Fizz') + (i%5?'':'Buzz') || i)
	return result;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
	let charTransformation = (char) => {
		let charValue = char.charCodeAt(0);
		if(charValue < 65 || charValue > 122 
		|| (charValue > 90 && charValue < 97)) {
			return char; //special char -> return char
		} else {
			if(charValue == 90) {
				return 'A'; //'Z' case -> return 'A'
			} else if(charValue == 122) {
				return 'a'; //'z' case -> return 'a'
			} else {
				return String.fromCharCode(charValue + 1);
			}
		}
	};

	let charCollection = phrase.split("");
	return charCollection.map( c => charTransformation(c) )
			.reduce( (str, char) => str += char );
};

module.exports = Util;

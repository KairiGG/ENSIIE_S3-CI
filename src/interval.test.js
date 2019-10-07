const Interval = require('./interval');

describe('overlaps', function () {

	test('Test overlapping, if two intervals overlap each other {(1, 3),(2, 4)}', () => {
		let interval1 = new Interval(1, 3);
		let interval2 = new Interval(2, 4);
    	expect(interval1.overlaps(interval2)).toBe(true);
	});

	test('Test overlapping, if two intervals don\'t overlap each other{(1, 2),(3, 4)}', () => {
		let interval1 = new Interval(1,2);
		let interval2 = new Interval(3,4);
		expect(interval1.overlaps(interval2)).toBe(false);
	});
});

describe('includes', function () {

	test('Test include function, if the interval contains the argument {(1, 4),(2, 3)}', () => {
		let interval1 = new Interval(1, 4);
		let interval2 = new Interval(2, 3);
    	expect(interval1.includes(interval2)).toBe(true);
	});

	test('Test include function, if the interval start after the argument {(2, 4),(1, 3)}', () => {
		let interval1 = new Interval(2, 4);
		let interval2 = new Interval(1, 3);
    	expect(interval1.includes(interval2)).toBe(false);
	});

	test('Test include function, if the interval end before the argument {(1, 3),(2, 4)}', () => {
		let interval1 = new Interval(1,3);
		let interval2 = new Interval(2,4);
		expect(interval1.includes(interval2)).toBe(false);
	});

	test('Test include function, if the interval end equals the argument {(1, 4),(1, 4)}', () => {
		let interval1 = new Interval(1,4);
		let interval2 = new Interval(1,4);
		expect(interval1.includes(interval2)).toBe(true);
	});
});

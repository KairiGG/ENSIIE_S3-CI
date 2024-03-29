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

	test('Test overlapping, if two intervals don\'t overlap each other{(3, 4),(1, 2)}', () => {
		let interval1 = new Interval(3,4);
		let interval2 = new Interval(1,2);
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

describe('union', function () {

	test('Test union function, if the interval overlap the argument {(1, 3),(2, 4)}', () => {
		let interval1 = new Interval(1, 3);
		let interval2 = new Interval(2, 4);
    		expect(interval1.union(interval2)).toStrictEqual([new Interval(1,4)]);
	});

	test('Test union function, if the interval doesn\'t overlap the argument {(1, 2),(3, 4)}', () => {
		let interval1 = new Interval(1, 2);
		let interval2 = new Interval(3, 4);
    		expect(interval1.union(interval2)).toStrictEqual([interval1, interval2]);
	});
});

describe('intersection', function () {

	test('Test intersection function, if the interval overlap the argument {(1, 3),(2, 4)}', () => {
		let interval1 = new Interval(1, 3);
		let interval2 = new Interval(2, 4);
    		expect(interval1.intersection(interval2)).toStrictEqual(new Interval(2,3));
	});

	test('Test intersection function, if the interval doesn\'t overlap the argument {(1, 2),(3, 4)}', () => {
		let interval1 = new Interval(1, 2);
		let interval2 = new Interval(3, 4);
    		expect(interval1.intersection(interval2)).toStrictEqual(null);
	});
});

describe('exclusion', function () {

	test('Test exclusion function, if the interval overlap the argument {(1, 3),(2, 4)}', () => {
		let interval1 = new Interval(1, 3);
		let interval2 = new Interval(2, 4);
    		expect(interval1.exclusion(interval2)).toStrictEqual([new Interval(1,2), new Interval(3,4)]);
	});

	test('Test exclusion function, if the interval doesn\'t overlap the argument {(1, 2),(3, 4)}', () => {
		let interval1 = new Interval(1, 2);
		let interval2 = new Interval(3, 4);
    		expect(interval1.exclusion(interval2)).toStrictEqual([interval1, interval2]);
	});
});


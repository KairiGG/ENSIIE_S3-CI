const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository GetTotalCount', function () {

    test('Get total count of books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(3)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(3);
    });
});

describe('Book repository GetTotalPrice', function () {

    test('Get total price of books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([5, 5, 5, 5, 5, 5, 5])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(35);
    });
});

describe('Book repository GetBookByName', function () {

    test('Get book by name', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue({ "id": 1, "name": "test", "price": 6.1, "added_at": "2019-01-01" })
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName('test')).toStrictEqual({ "id": 1, "name": "test", "price": 6.1, "added_at": "2019-01-01" });
    });
});

describe('Book repository getCountBookAddedByMonth', function () {

    test('Get count book added by month', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([ "2019-06-02", "2021-01-01", "2019-01-01", "2020-03-01", "2019-01-04", "2021-02-01", "2019-01-01", "2032-01-01", "2019-01-01" ])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMonth('test')).toStrictEqual([ { year: '2019', month: 1, count: 4, count_cumulative: 4 },
  { year: '2019', month: 6, count: 1, count_cumulative: 5 },
  { year: '2020', month: 3, count: 1, count_cumulative: 1 },
  { year: '2021', month: 1, count: 1, count_cumulative: 1 },
  { year: '2021', month: 2, count: 1, count_cumulative: 2 },
  { year: '2032', month: 1, count: 1, count_cumulative: 1 } ]
);
    });
});

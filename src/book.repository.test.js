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
            value : jest.fn().mockReturnThis(),
            reduce : jest.fn().mockReturnValue(35)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(35);
    });
});

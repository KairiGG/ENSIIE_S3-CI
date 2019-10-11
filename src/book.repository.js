class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
		return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
		return this.db.get('books').map('price').value()
		.reduce( (acc, val) => acc += val );
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
		return this.db.get('books')
	  		.find({ name: bookName })
	  		.value();
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month: 2,
     *          count: 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month: 3,
     *          count: 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMonth(bookName) {
	    let dates = this.db.get('books')
                   .filter({ name: bookName})
                   .map('added_at')
                   .value()
                   .map( function(date){ return {year: new Date(date).getYear() + 1900, month: new Date(date).getMonth()}} );
        
        let planning = {};
        for(let date of dates) {
            if(!(date.year in planning))
                planning[date.year] = new Array(12).fill(0);
            planning[date.year][date.month] += 1;
        }
        
        let cumulativePlanning = JSON.parse(JSON.stringify(planning))
        for(let year in cumulativePlanning)
            for(let i = 1; i < cumulativePlanning[year].length; i++)
                cumulativePlanning[year][i] += cumulativePlanning[year][i - 1];
        
        let accounting = [];
        for(let year in planning) {
            for(let i = 0; i < planning[year].length; i++)
                if(planning[year][i] > 0)
                    accounting.push(
                        {year: year, month: i + 1, count: planning[year][i], count_cumulative: cumulativePlanning[year][i]}
                    );
        }
        
        return accounting;
    }

}


module.exports = BookRepository;

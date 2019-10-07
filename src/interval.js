class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end
    }

    /*toString() {
        return "[" + this.start + "," + this.end + "]";
    }*/

    /**
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.overlaps(interval2) => true
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.overlaps(interval2) => false
     *
     * @param {Interval} interval
     * @returns {boolean}
     */
    overlaps(interval) {
        return this.end > interval.start && this.start < interval.end;
    }

    /**
     * Retourne true si cet interval contient le paramètre interval
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.includes(interval2) => true
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.includes(interval2) => false
     *
     * @param {Interval} interval
     * @returns {boolean}
     */
    includes(interval) {
		return this.start <= interval.start && this.end >= interval.end;
    };

    /**
     * Retourne l'union de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    union(interval) {
		if(this.overlaps(interval))
			return [new Interval(Math.min(this.start, interval.start), Math.max(this.end, interval.end))];
		else
			return [this, interval];
    };

    /**
     * Retourne l'intersection de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) =>                     ▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) => <tableau vide>
     *
     * @param {Interval} interval
     * @returns {Interval|null}
     */
    intersection(interval) {
		if(this.overlaps(interval))
			return new Interval(Math.max(this.start, interval.start), Math.min(this.end, interval.end));
		else
			return null;
    };

    /**
     * Retourne l'exclusion de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     ▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    exclusion(interval) {
		if(this.overlaps(interval))
			return [new Interval(Math.min(this.start, interval.start), Math.max(this.start, interval.start)),
			new Interval(Math.min(this.end, interval.end), Math.max(this.end, interval.end))];
		else
			return [this, interval];
    };
}

module.exports = Interval;

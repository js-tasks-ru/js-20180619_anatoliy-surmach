let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    current.setHours(0, 0, 0, 0);
    last.setHours(0, 0, 0, 0);

    return {
        next(){
            current.setDate(current.getDate() + 1);

            let day = current.getDay();
            let date = (current.getDate() < 10) ?
                '0' + current.getDate() :
                '' + current.getDate();
            let value = (day > 0 && day < 6) ? date : `[${date}]`;

            if (last - current >= 0) {
                return {
                    done: false,
                    value: value
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
};



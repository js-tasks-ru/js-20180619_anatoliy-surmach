'use strict';

function getDateInMonth(year, month) {
    return new Date(year, month, 0 , 3).getDate();
}

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */

function getBeforeTime(when) {
    let current = Date.now(); // обязательно получать текущую дату через эту функцию. Иначе тесты работать не будут

    let result = [],
        diff = when - current;

    if(diff <= 0)
        return 'событие завершилось';

    let dt = new Date(diff);
    let now = new Date(current);

    let hours = dt.getUTCHours(),
        minutes = dt.getUTCMinutes(),
        seconds = dt.getUTCSeconds(),
        days = when.getUTCDate() - now.getUTCDate(),
        months = when.getUTCMonth() - now.getUTCMonth(),
        years = when.getUTCFullYear() - now.getUTCFullYear();

    if (seconds) {
       result.push(`${seconds} сек.`);
    }

    if (minutes) {
        result.push(`${minutes} мин.`);
    }

    if (hours) {
        result.push(`${hours} ч.`);
    }

    if (days < 0) {
        months -= 1;
        let daysInMonth = getDateInMonth(when.getUTCFullYear(), when.getUTCMonth() - 1);
        days = daysInMonth + days;
    }

    if (days) {
        result.push(`${days} д.`);
    }

    if (months) {
        result.push(`${months} мес.`);
    }

    if (years) {
        result.push(`${years} г.`);
    }

    return result.reverse().join(', ');
}
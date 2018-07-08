'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = table.lastElementChild.getElementsByTagName('tr');

    for (let row of rows) {
        let avail = row.children[3].dataset.available,
            gender = row.children[2].innerHTML,
            age = +row.children[1].innerHTML;

        if (!avail) row.setAttribute('hidden', '');

        if (avail === 'true') {
            row.classList.add('available');
        } else {
            row.classList.add('unavailable');
        }

        if (gender === 'm') {
            row.classList.add('male');
        } else {
            row.classList.add('female');
        }

        if (age < 18) row.style.textDecoration = 'line-through';
    }
}
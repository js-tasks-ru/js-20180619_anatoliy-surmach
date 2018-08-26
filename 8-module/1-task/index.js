'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');

    let rows = '';

    rows += `<thead><tr>
                <td data-type="string">Name</td>
                <td data-type="number">Age</td>
                <td data-type="number">Salary</td>
                <td data-type="string">City</td>
            </tr></thead>`;

    for (let item of items) {
        rows += `<tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.salary}</td>
                    <td>${item.city}</td>
                </tr>`;
    }

    this.el.innerHTML = rows;

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        let rows = [].slice.call(this.el.rows, 1),
            type = this.el.rows[0].cells[column].dataset.type,
            tbody = this.el.querySelector('tbody'),
            compare;

        switch (type) {
            case 'number':
                compare = (rowA, rowB) => {
                    return (desc) ? rowB.cells[column].innerHTML - rowA.cells[column].innerHTML
                            : rowA.cells[column].innerHTML - rowB.cells[column].innerHTML;
                };
                break;
            case 'string':
                compare = (rowA, rowB) => {
                    return (desc) ? rowA.cells[column].innerHTML < rowB.cells[column].innerHTML
                            : rowA.cells[column].innerHTML > rowB.cells[column].innerHTML;
                };
                break;
        }

        rows.sort(compare);

        this.el.removeChild(tbody);
        for (let row of rows) {
            tbody.appendChild(row);
        }
        this.el.appendChild(tbody);
    };
}


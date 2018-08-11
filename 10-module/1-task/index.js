(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            let rows = '';

            rows += `<thead><tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Salary</td>
                        <td>City</td>
                        <td></td>
                    </tr></thead>`;

            for (let row of this.data) {
                rows += `<tr data-id = "${row.id}"><td>${row.name}</td>
                            <td>${row.age}</td>
                            <td>${row.salary}</td>
                            <td>${row.city}</td>
                            <td><a href="#delete" data-remove>X</a></td>
                        </tr>`;
            }

            this.el.classList.add('pure-table');
            this.el.innerHTML = rows;

            this.el.addEventListener('click', (event) => {
                let target = event.target;

                if(!target.hasAttribute('data-remove')) {
                    return;
                }

                let id = +target.closest('tr').getAttribute('data-id');

                this.onRemoved(id);
            });
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            let row = this.el.querySelector('tbody tr[data-id="' + id + '"]');
            this.el.querySelector('tbody').removeChild(row);
        }
    }

    window.ClearedTable = ClearedTable;
})();

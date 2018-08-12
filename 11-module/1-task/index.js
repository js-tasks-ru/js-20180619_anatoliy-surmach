(function () {

    class Tooltip {
        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
            this.root= null;
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            this.root = root;

            this.mouseOverHandler = (e) => {
                let target = e.target;

                let tooltip = target.getAttribute('data-tooltip');
                if (!tooltip) return;

                this.el.innerHTML = tooltip;

                let coords = target.getBoundingClientRect();

                let left = coords.left + (target.offsetWidth - this.el.offsetWidth) / 2;
                if (left < 0) left = 0;

                let bottom = coords.bottom + this.indent;

                this.el.style.left = left + 'px';
                this.el.style.top = bottom + 'px';

                this.el.classList.add(`${this.name}_active`);
            };

            this.mouseOutHandler = (e) => {
                let tooltip = e.target.getAttribute('data-tooltip');

                if (!tooltip) return;

                this.el.classList.remove(`${this.name}_active`);
            };

            root.addEventListener('mouseover', this.mouseOverHandler);
            root.addEventListener('mouseout', this.mouseOutHandler);
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            let root = this.root;
            root.removeEventListener('mouseover', this.mouseOverHandler);
            root.removeEventListener('mouseout', this.mouseOutHandler);
        }
    }

    window.Tooltip = Tooltip;
})();
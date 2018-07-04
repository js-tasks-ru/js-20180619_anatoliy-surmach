'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    for (let value of friends) {
        let li = document.createElement('li');
        li.innerHTML = `${value.firstName} ${value.lastName}`;
        ul.appendChild(li);
    }
    return ul;
}

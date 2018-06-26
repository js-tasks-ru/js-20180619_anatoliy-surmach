'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let regexp = /-?\d+(\.\d+)?/g;

    let result = str.match(regexp);
    let arr = result.map(Number);
    return { min: Math.min( ...arr ), max: Math.max( ...arr ) };
}


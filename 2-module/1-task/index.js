/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    let clonedObj = {};

    for (let key in obj){
        if(obj[key] === null || typeof(obj[key]) !== 'object')
            clonedObj[key] = obj[key];
        else
            clonedObj[key] = clone(obj[key]);
    }

    return clonedObj;
}
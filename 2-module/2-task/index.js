/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
    let result = findPropName(obj, value);

    if (result !== null) {
        result = result.slice(0, -1);
    }

    if (result && ~result.indexOf(' ')) {
        result = result.split(' ');
    }

    return result;
}

function findPropName(obj, value) {
    let prop = null;

    for (let key in obj) {
        if (obj[key] === value) {
            if (prop === null) prop = '';
            prop = prop + key + ' ';
        }
        else if (typeof(obj[key]) === 'object') {
            let res = findPropName(obj[key], value);
            if (res) {
                if (prop === null) prop = '';
                prop = prop + key + '.' + res;
            }
        }
        else {
            prop = null;
        }
    }

    return prop;
}
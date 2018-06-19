/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow (m, n) {
    var res = m;
    for(var i = 1; i < n; i++)
        res *= m;
    return res;
}

/*do{
    var x = +prompt("Введите число x:", "");
} while(isNaN(x));
do{
    var n = +prompt("Введите натуральную степень n, в которую надо возвести x:", "");
} while ((n ^ 0) !== n || n <= 0 || isNaN(n));*/

//alert("Результат: " + pow(x, n));
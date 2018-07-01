/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    return data
        .filter(worker => worker.age <= age)
        .map(worker => `${worker.name}, ${worker.balance}`)
        .join('\n');
}



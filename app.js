"use strict";
const num1Element = document.querySelector('#num1');
const num2Element = document.querySelector('#num2');
const addBtn = document.querySelector('#btn');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2;
}
addBtn.addEventListener('click', () => {
    const n1 = num1Element.value; // Convert to number
    const n2 = num2Element.value; // Convert to number
    const result = add(+n1, +n2);
    const stringValue = add(n1, n2);
    console.log(stringValue);
    console.log(result);
});

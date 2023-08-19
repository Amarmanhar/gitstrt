const num1Element = document.querySelector('#num1') as HTMLInputElement;
const num2Element = document.querySelector('#num2') as HTMLInputElement;
const addBtn = document.querySelector('#btn')!;

function add(num1: number | string, num2: number | string) {
    if( typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 +''+ num2;
    }
    return +num1 + +num2;
    
}

const numValue : number[] = [];
const strValue : string[] = [];

addBtn.addEventListener('click', () => {
    const n1 = num1Element.value; // Convert to number
    const n2 = num2Element.value; // Convert to number
    const result = add(+n1, +n2);
    numValue.push(result as number);

    const stringValue = add(n1, n2);
    strValue.push(stringValue as string);
    console.log(numValue);
    console.log(strValue);
});


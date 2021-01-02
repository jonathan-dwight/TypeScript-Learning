// RETURN TYPES FOR FUNCTIONS

// can let it infer or not

function add(n1: number, n2: number) {
    return n1 + n2;
}


// this has return type void;
// void means it does not have a RETURN statement;
// undefined is a value type in TS
function printResult(num: number): void {
    console.log('Result:' + num);
}


function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

printResult(add(5, 12))

// functions as types - controls parameters and types

let combineValues: (a: number, b: number) => number; 

combineValues = add;
// combineValues = printResult; will give error because we specified it

console.log(combineValues(8, 8));


addAndHandle(10, 20, (result) => { 
    console.log(result);
    // if you try to return - can return without punishment... but the return wont show
})
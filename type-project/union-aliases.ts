// UNION TYPE

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'
// can create your own types to make it reusable
// can also be used to create complex objects
// type User = { name: string; age: number }
// const u1: User = { name: "Max", age: 30 }

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    // conditionals will usually be used with union types
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    
}

const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);


// LITERAL TYPES - very clear with how the exact value should hold
// INTERFACE - describe how classes should be written

// difference between type and interface -- type can store other things
// interface is clear that you want to define the structure
// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }


// let user1: Person;

// user1 = {
//     name: 'JD',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name)
//     }
// }


// can add readonly to interfaces or types

// can also inherit interfaces 

// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;


interface Named {
    readonly name?: string;
    outputName?: string;
    // question mark says it might exist but not 
}

// cna inherit from multiple interfaces with a comma
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    
    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (!this.name) {
            console.log('Hi!')
        } else {
            console.log(phrase + ' ' + this.name)
        }
    }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am')



// const person: {
//     name: string;
//     age: number;
// } = { better to just have it infer

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'JD',
//     age: 25,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] //tuple role: [number, string] push is an exception
// }

//enumberable - adds labels to numbers

enum Role { ADMIN, READ_ONLY, AUTHOR }; // usually all caps
// can set values to the items in the object

//HOW IT LOOKS IN JS
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
//     Role[Role["AUTHOR"] = 2] = "AUTHOR";
// })(Role || (Role = {}));

const person= {
    name: 'JD',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}
// when highlighted it shows ; at the then because its object inference
// key type pairs

// can do person: object to say its an object
// person.role = [0, 'admin', 'user'] => will error out

let favoriteActivities: string[];
// any type in TypeScript, you can put anything you want

console.log(person.name);
// const person: {
//     name: string;
//     age: number;
// } = { better to just have it infer

const person = {
    name: 'JD',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] //tuple role: [number, string]
}
// when highlighted it shows ; at the then because its object inference
// key type pairs

// can do person: object to say its an object

let favoriteActivities: string[];
// any type in TypeScript, you can put anything you want

console.log(person.name);
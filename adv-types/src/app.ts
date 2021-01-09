// Code goes here!
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface Admin = {
//     name: string;
//     privileges: string[];
// };

// interface Employee = {
//     name: string;
//     startDate: Date;
// };
// interface ElevatedEmployee extends Admin, Employee {};
//close to interface intersection
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;


// this is called typeguard
//function overload 
function add(a: number, b:number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b ==="string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}

class Car {
    drive() {
        console.log
    }
}

class Truck {
    drive() {
        console.log('Driving a truck')
    }

    loadCargo(amount: number) {
        console.log('loading cargo' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // this is js code
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break
        case 'horse':
            speed = animal.runningSpeed;

    }
    console.log('Moving at Speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10});
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// this is type casting -- the excalmation with tell it that it will never return null

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!;'
}

interface ErrorContainer {
    // { email: 'not a valid email', username: 'must start with a character}
    [prop: string]: string // dont know exact property or property name... but value and key must be a string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: "Must start with a capital character"
}

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: "CEO", description: 'My own company' }
};

// optional chaining - ? - does it exist
console.log(fetchedUserData?.job?.title);

const userInput = undefined;
const storedData = userInput ?? 'Default';


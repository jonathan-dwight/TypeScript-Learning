// // same as string[];
// const names: Array<string> = ['Max', 'Manuel'];
// // names[0].split('')

// // specify what the type information is
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000)
// });

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "max" }, { age: 30 });
console.log(mergedObj.age);

interface Length {
    length: number;
}
const countAndPrint = <T extends Length>(element: T): [T, string] => {
    let descriptionText = "Got no value.";

    if (element.length > 0) {
        descriptionText = "Got" + element.length + "elements";
    }
    return [element, descriptionText];
};

console.log(countAndPrint(["sports", "cooking"]));

const extractAndConvert = <T extends object, U extends keyof T>(
    obj: T,
    key: U
) => {
    return obj[key];
};


class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item, 1));
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');

const numberStorage = new DataStorage<number>();

// this would cause bugs below
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max'});
// objStorage.addItem({ name: 'Manu'});
// objStorage.removeItem({ name: 'Manu'});

// BUILT IN TYPES FROM TYPESCRIPT -- only in typescript not put through in compilation

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}

const names: Readonly<string[]> = ["max", 'anna'];
// names.push('manu');

// generic type - lock in everything to a certain type

// union types - great if you want to lock in what you wnat - flexible
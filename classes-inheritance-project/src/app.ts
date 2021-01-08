// Code goes here!

//singleton only one instance of the class

// can only inherit
abstract class Department {

    static fiscalYear = 2020;
    // public name: string;
    protected employees: string[] = []
    // only accessible inside the class
    // js doesnt enforce this because it only recently learned it

    // below is a shortcut from the top
    // can add readonly or writeonly
    constructor(public name: string, protected id: string) {
        // this.name = n;
    }

    //allows you to usue it anymwhere like Math.pow()
    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this: Department): void;
    // other classes can reuse

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}



class ITDepartment extends Department {
    
    constructor(id: string, public admins: string[]) {
        super(id, "IT"); // passes up properties
    };

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}



class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    //creating getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        } 
        throw new Error('No report found')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a new value")
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name)
        // changed it to protected to allow other extended classes to use it
    }

    describe() {
        console.log("Accounting Department - ID " + this.id)
    }

}


// static methods allow you to add things to class

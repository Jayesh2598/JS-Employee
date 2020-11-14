class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getters and setters
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect.";
    }

    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary
                    + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Alan", 300000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.name = "joe";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
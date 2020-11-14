class EmployeePayrollData {

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
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect.";
    }
    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id))
            this._id = id;
        else throw "Id is incorrect.";
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw "Salary is incorrect.";
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp('[M,F]{1}$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else throw "Gender is incorrect.";
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw "StartDate is incorrect.";
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

let employeePayrollData1 = new EmployeePayrollData(1, "Frank", 10000, "M", new Date());
console.log(employeePayrollData1.toString());

try {
    let employeePayrollData2 = new EmployeePayrollData(-1, "frank", -2000, "M", new Date('2021-15-11T02:20:30Z'))
}
catch (e) {
    console.error(e);
}
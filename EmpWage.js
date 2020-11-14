{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 2);
    if (empCheck == IS_ABSENT)
        console.log("Employee is absent.");
    else
        console.log("Employee is present.");
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;


let empHours = 0;
let empCheck = Math.floor(Math.random() * 3);
switch (empCheck) {
    case IS_PART_TIME:
        empHours = PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        empHours = FULL_TIME_HRS;
        break;
    default:
        empHours = 0;
}

let empWage = empHours * WAGE_PER_HR;
console.log(`Employee Wage : ${empWage}`);

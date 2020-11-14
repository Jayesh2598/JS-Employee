const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;

function getWorkingHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

let totalWorkingDays = 0;
let totalEmpHours = 0;
while (totalEmpHours <= MAX_WORKING_HRS && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkingHrs(empCheck);
}

let empWage = totalEmpHours * WAGE_PER_HR;
console.log(`Hours worked : ${totalEmpHours}; Days worked : ${totalWorkingDays}; Employee Wage : ${empWage}`);
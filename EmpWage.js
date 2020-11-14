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

function calcDailyWage(empHours) {
    return empHours * WAGE_PER_HR;
}

let totalWorkingDays = 0;
let totalEmpHours = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();

while (totalEmpHours <= MAX_WORKING_HRS && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHrs(empCheck);
    totalEmpHours += empHours;
    empDailyWageArray.push(calcDailyWage(empHours));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHours));
}

let empWage = calcDailyWage(totalEmpHours);
console.log(`Hours worked : ${totalEmpHours}; Days worked : ${totalWorkingDays}; Employee Wage : ${empWage}`);

//UC 7A
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log(`Hours worked : ${totalEmpHours}; Days worked : ${totalWorkingDays}; Employee Wage : ${totalEmpWage}`);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Wage with reduce - " + empDailyWageArray.reduce(totalWages, 0));

//UC 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " => " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("Daily wage map: ");
console.log(mapDayWithWageArr);

//UC 7C
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Full days only : ");
console.log(fullDayWageArr);

//UC 7D
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First full time occurence : " + mapDayWithWageArr.find(findFullTimeWage));

//UC 7E
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Are all Full Time entries? " + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Is any Part Time Entry? " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("No of days worked : " + empDailyWageArray.reduce(totalDaysWorked, 0));

//UC 8
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Employee Wage Map total Wage : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
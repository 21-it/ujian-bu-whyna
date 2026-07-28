/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeeName: string = "Dimas"
const basicSalary: number = 5000000
const defaultOvertimeHours: number = 10
const overtimeRate: number = 50000
const bonus: number = 300000
const employeeOvertimeHours: number = 12
const overtimePay: number = employeeOvertimeHours * bonus
const finalSalary: number = basicSalary + overtimePay

console.log("==== Employee Data ====")
console.log("Employee Name: " + employeeName)
console.log("Basic Salary: " + basicSalary)
console.log("Default Overtime Hours: " + defaultOvertimeHours)
console.log("Overtime Rate: " + overtimeRate)
console.log("Overtime Pay: " + overtimePay)
console.log("Bonus: " + bonus)
console.log("Final Salary: " + finalSalary)
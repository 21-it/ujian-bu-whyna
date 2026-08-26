/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 *
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 *
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 *
 * Otherwise:
 *  - Scholarship Amount = Rp0
 *
 * Finally, the system should also calculate how much funding remains if the
 * university has a total scholarship budget of Rp500,000,000.
 *
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

const studentName: string = "Alya Putri"
const gpaScore: number = 3.89
const gpaResult = gpaScore > 3.75 ? "Pass" : "Fail";
const familyIncome: number = 4200000
const familyIncomeResult = familyIncome < 5000000 ? "Pass" : "Fail";
const competitionCount: number = 4
const competitionCountResult = competitionCount > 3 ? "Pass" : "Fail";
const hasDisciplinaryRecord: boolean = !false;
const isDocumentsComplete: boolean = true;
const isQualifies: boolean = (gpaResult && familyIncomeResult && competitionCountResult && isDocumentsComplete) && hasDisciplinaryRecord
const isSchoolAmount = isQualifies ? 12000000 : 0

console.log("==== Scholarship Data ====")
console.log("Student Name: " + studentName)
console.log("GPA Score: " + gpaScore)
console.log("GPA Score Result: " + gpaResult)
console.log("Family Income: " + familyIncome)
console.log("Family Income Result: " + familyIncomeResult)
console.log("Competition Count: " + competitionCount)
console.log("Competition Count Result: " +  competitionCountResult)
console.log("Has No Discipline Record: " + hasDisciplinaryRecord)
console.log("Is Documents Complete: " + isDocumentsComplete)
console.log("Was qualified: " + isQualifies)
console.log("School Amount: " + isSchoolAmount)

/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:

 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 *
 * The administration received the following student information.
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 *
 * Tasks:
 * 1. Declare all required variables.
 * 2. Implement the decision using an if statement.
 * 3. Display the appropriate message. if student meets all requirement,
 * will be display "Congratulations! You are eligible to graduate.",
 * otherwise display "You are not eligible to graduate."
 */

const studentName: string = "Alya Putri"
const minimumFinalScore: number = 75
const minimumAttendance: number = 90
const finalScore: number = 82
const attendance: number = 94
const tuitionPaid: boolean = true;
const isEligible: boolean = finalScore > minimumFinalScore && attendance > minimumAttendance && tuitionPaid

console.log("\n==== Student Data ====\n")
console.log("Student Name: " + studentName)
console.log("Final Score: " + finalScore)
console.log("Attendance: " + attendance)
console.log("Tuition Paid: " + tuitionPaid)

if (finalScore > minimumFinalScore) {
    console.log("Result (Score): Congrats, you passed");
}   else {
    console.log("Result: Sorry, you failed.")
}

if (attendance > minimumAttendance) {
    console.log("Result (Attendance): Congrats, you passed");
}   else {
    console.log("Result: Sorry, you failed.")
}

if (isEligible === true) {
    console.log("Result (Eligible): Congratulations! You are eligible to graduate.")
}   else {
    console.log("Result: You are not eligible to graduate.")
}

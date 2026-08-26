/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 *
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const atleastFinalScore: number = 75
const finalScore: number = 82
const atleastAttendance: number = 90
const attendance: number = 94
const tuitionPaid: boolean = true
const isEligible: boolean = finalScore > atleastFinalScore && attendance > atleastAttendance && tuitionPaid

console.log("==== Eligible Student ====")
console.log("Minimum Final Score: " + atleastFinalScore)
console.log("Minimum Attendance: " + atleastAttendance)
console.log("Final Score: " + finalScore)
console.log("Attendance: " + attendance)
console.log("finalScore > atleastFinalScore: ", finalScore > atleastFinalScore)
console.log("attendance > atleastAttendance: ", attendance > atleastAttendance)
console.log("tuitionPaid && isEligible:", tuitionPaid && isEligible)
console.log("Is Egilible: " + isEligible)

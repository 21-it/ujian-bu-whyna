/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 *
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 *
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 *
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 *
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const studentName: string = "Fajar Hidayat"
const gpa: number = 3.86
const familyIncome: number = 4200000
const competitionCount: number = 4
const hasDisciplinaryRecordResult: boolean = !true
const documentsCompleteResult: boolean = true

const minimumGpa: number = 3.75
const minimumFamilyIncome: number = 5000000
const minimumCompetitionCount: number = 3
const hasDisciplinaryRecord: boolean = !true
const documentsComplete: boolean = true

console.log("==== First Screening ====")
const firstScreening: boolean = gpa > minimumGpa && familyIncome < minimumFamilyIncome

if (firstScreening == true) {
    const firstScreeningResult = firstScreening ? "You passed the first screening" : "You failed the first screening"
    console.log(`${firstScreeningResult}`)
}   else {
    console.log("Uknown error, try again")
}

console.log("\n==== Second Screening ====")
const secondScreening: boolean = competitionCount > minimumCompetitionCount && hasDisciplinaryRecordResult == hasDisciplinaryRecord && documentsCompleteResult == documentsComplete

if (secondScreening == true) {
    const firstScreeningResult = secondScreening ? "You passed the second screening" : "You failed the second screening"
    console.log(`${firstScreeningResult}`)
}   else {
    console.log("Uknown error, try again")
}

console.log("\n==== Scholarship Data ====")
console.log("Student Name: " + studentName)
const isEligible: boolean = firstScreening == true && secondScreening == true

if (isEligible == firstScreening == true && secondScreening == true) {
    const isEligibleResult= isEligible ? "Scholarship Approved" : "Scholarship Failed";
    console.log(`${isEligibleResult}`)
}   else {
    console.log("Uknown error, try again.")
}

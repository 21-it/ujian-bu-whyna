/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

const patientName: string = "Siti Rahma"
const criticalCondition: boolean = false
const hasAppointment: boolean = true
const age: number = 67
const hasInsurance: boolean = true

console.log(`${patientName}`)
if (criticalCondition == false) {
    const criticalConditionResult = criticalCondition ? "You need to go to Emergency Room immediately" : "Don't need that Emergency room"
    console.log(`${criticalConditionResult}`)
}   else {
    console.log("Don't need that Emergency room")
}

if (hasAppointment == true && age > 60) {
    const ageResult = age ? "Priority Queue" : "Regular Queue"
    console.log(`receive ${ageResult}`)
}   else {
    console.log("Receive Regular Queue")
}

if (hasInsurance == true) {
    console.log("You are assigned to Insurance Registration Room")
}   else {
    console.log("You are assigned to General Registration Room")
}
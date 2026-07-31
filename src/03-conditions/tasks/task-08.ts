/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const passengerName: string = "Fajar Nugroho"
const onlineCheckIn: boolean = true
const cabinClass: string = 'Economy'
const baggageWeight: number = 24
const baggageWeightMinimum: number = 20
const feeBaggage: number = 25000

console.log("==== First Screening ====")
if (onlineCheckIn == true) {
    console.log("You passed the first screening. Let's move to second screening")
}   else {
    console.log("Please complete online check-in first.")
}

console.log("\n==== Second Screening ====")
const secondScreening: boolean = baggageWeight < baggageWeightMinimum && cabinClass == "Business"
const secondScreeningFinal: string = "Pay your fee baggage for next."
if (secondScreening == true) {
    console.log("Congrats, you passed both screening. Wait for the boarding pass printing")
}   else if (secondScreening == false) {
    console.log("It's okay, just pay your overweight baggage fee.")
}   else {
    console.log("Sorry, you failed.")
}

console.log("\n==== Boarding Pass Printing ====")
console.log(`Passanger Name: ${passengerName}`)
console.log("Online Check-in: " + onlineCheckIn)
console.log("Cabin Class: " + cabinClass)
console.log("Baggage Weight: " + baggageWeight)
console.log("Result: " + secondScreeningFinal)
/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640
const currentMeter: number = 25892
const pricePerKwh: number = 1650
const hasSolarPanel: boolean = true;
const discountSolarPanel: boolean = hasSolarPanel == true ? true : false
const energySavingMode: boolean = false;
const additionalDiscount: boolean = energySavingMode == false ? true : false;
const discount: number = 0.2 //karenna install solar panel
const totalConsumption: number = currentMeter - previousMeter
const totalConsumptionResult: boolean = totalConsumption > 300 ? true : false;
const baseBill: number = totalConsumption * pricePerKwh
const discountAmount: number = baseBill *  discount
const finalBill: number = baseBill - discountAmount
const greenEnergyEligibility: boolean = hasSolarPanel && totalConsumptionResult && energySavingMode

console.log("==== Smart Monitor Electricity Data ====")
console.log("Previous Meter: "  + previousMeter)
console.log("Current Meter: " + currentMeter)
console.log("Price per Kwh: " + pricePerKwh)
console.log("Has Solar PAnel: " + hasSolarPanel)
console.log("Energy Saving Mode: " + energySavingMode)
console.log("Discount: " + discount)
console.log("Total Consumption: " + totalConsumption)
console.log("Base Bill: " + baseBill)
console.log("Discount Amount: " + discountAmount)
console.log("Final Bill: " + finalBill)
console.log("Green Energy Eligible: " + greenEnergyEligibility)
/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPriceperNight: number = 650000
const nightStayedMinimum: number = 3
const nightStayed: number = 4
const nightStayedResult: boolean = nightStayed > nightStayedMinimum ? true : false;
const isVip: boolean = true;
const isVipResult: boolean = isVip == true ? true : false;
const roomSubtotal: number = roomPriceperNight * nightStayed
const serviceCharge: number = 120000
const taxRate: number = 0.11
const roomDiscount: number = 0.12
const discount: number = isVipResult ? roomSubtotal * roomDiscount : 0;
const discountedRoom: number = roomSubtotal - discount
const tax: number = discountedRoom * taxRate
const totalBeforeService: number = discountedRoom + tax
const totalPayment: number = totalBeforeService + serviceCharge
const freeBreakfast: boolean = nightStayedResult || isVipResult

console.log("==== Hotel Data ====")
console.log("Room Price per Night: " + roomPriceperNight)
console.log("Night Stayed: " + nightStayed)
console.log("Room Subtotal: " + roomSubtotal)
console.log("Service Charge: " + serviceCharge)
console.log("Tax Rate: " + taxRate)
console.log("Room Discount for VIP Member: " + roomDiscount)
console.log("is VIP: " + isVip)
console.log("Discount: " + discount)
console.log("Discounted Room: " + discountedRoom)
console.log("Tax: " + tax)
console.log("Total Before Service: " + totalBeforeService)
console.log("Total Payment: " + totalPayment)
console.log("Free Breakfast: " + freeBreakfast)
/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const playtimeHours: number = 7
const playtimeMinutes: number = 35
const playtimeTotalTominutes: number = ((playtimeHours * 60) + playtimeMinutes)
const remainingMinutes: number = playtimeTotalTominutes % 60
const chargePerHours: number = 8000
const discount: number = 0.15
const fullHours: number = Math.floor(playtimeTotalTominutes / 60); //pakai math.floor() untuk dapetin jumlah jam penuh
const totalBilledHours: number = remainingMinutes > 0 ? fullHours + 1 : fullHours  //7 jam 35 menit dikonversi menjadi 8 jam karena setiap menit yang tersisa dihitung 1 jam penuh
const beforeDiscounted: number = totalBilledHours * chargePerHours
const isEligibleforDiscount: boolean = playtimeTotalTominutes > 300;
const discountAmount: number = beforeDiscounted * discount
const finalPayment: number = beforeDiscounted - discountAmount

console.log("==== Internet Cafe Data ====")
console.log("Playtime in Full Hours: " + playtimeHours)
console.log("Playtime in Full Minutes: " + playtimeMinutes)
console.log("Playtime Convert to Minutes: " + playtimeTotalTominutes)
console.log("Remaining Minutes: " + remainingMinutes)
console.log("Charge per hours: " + chargePerHours)
console.log("Discount: " + discount)
console.log("Full Hours: " + fullHours)
console.log("Total Billed Hours: " + totalBilledHours)
console.log("Before Discount: " + beforeDiscounted)
console.log("Eligible for Discount: " + isEligibleforDiscount)
console.log("Discount Amount: " + discountAmount)
console.log("Final Payment: " + finalPayment)
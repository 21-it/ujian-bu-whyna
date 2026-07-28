/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

type Menu = {
    menuName: string;
    price: number;
    amountQuantity: number;
}

const menus: Menu[] = [
    {
        menuName: "Fried Rice",
        price: 18000,
        amountQuantity: 3,
    },
    {
        menuName: "Bottle of mineral water",
        price: 5000,
        amountQuantity: 2,
    }
]

const discount: number = 10000
const totalFood: number = menus[0].price * menus[0].amountQuantity
const totalDrink: number = menus[1].price * menus[1].amountQuantity
const grandTotal: number = totalFood + totalDrink
const finalPayment: number = ((totalFood - discount) + (totalDrink - discount))

console.log('==== Cafetaria Menu ====')
console.log("Total Food: " + totalFood)
console.log("Total Drink: " + totalDrink)
console.log("Grand Total: " + grandTotal)
console.log("Discount: " + discount)
console.log("Final Payment: " + finalPayment)
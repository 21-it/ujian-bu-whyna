/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 *
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 *
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 *
 * Additional Information: Current customer is Premium member.
 *
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

type Product= {
    productName: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    {
        productName: "Mechanical Keyboard",
        price: 850000,
        quantity: 1
    },
    {
        productName: "Wireless Mouse",
        price: 275000,
        quantity: 2
    },
    {
        productName: "Mouse Pad",
        price: 120000,
        quantity: 1
    }
]

const discount: number = 0.1
const ispremiumMember: boolean = true;
const totalProductOne: number = products[0].price * products[0].quantity
const totalProductTwo: number = products[1].price * products[1].quantity
const totalProductThree: number = products[2].price * products[2].quantity
const grandPayment: number = totalProductOne + totalProductTwo + totalProductThree
const isDiscountApproved = grandPayment > 1000000 ? true : false
const discountAmount: number = grandPayment * discount
const finalPayment: number = grandPayment - discountAmount


console.log("==== Online Store Data ====")
console.log("Total Product No.1: " + totalProductOne)
console.log("Total Product No.2: " + totalProductTwo)
console.log("Total Product No.3: " + totalProductThree)
console.log("Did the customer's premium member? : " + ispremiumMember)
console.log("Grand Payment: " + grandPayment)
console.log("Is Discount Approved: " +isDiscountApproved)
console.log("Discount Amount: " + discountAmount)
console.log("Final Payment: " + finalPayment)
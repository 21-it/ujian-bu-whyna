/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

type Product = {
    productName: String;
    price: number;
    quantity: number;
}

const products: Product[] = [
    {
        productName: "Mechanical Keyboard",
        price: 850000,
        quantity: 1,
    },
    {
        productName: "Wireless mouse",
        price: 275000,
        quantity: 2,
    },
    {
        productName: "Monitor Stand",
        price: 420000,
        quantity: 1,
    }
]

const voucherValue: number = 100000
const vatRate: number = 0.11
const isPremiumMember: boolean = true;
const discountPremiumMember: number = 0.1
const subTotal: number = ((products[0].price * products[0].quantity) + (products[1].price * products[1].quantity) + (products[2].price * products[2].quantity))
const discountAmount: number = subTotal * discountPremiumMember
const paymentBeforeTax: number = (subTotal - discountAmount) - voucherValue
const rewardPoint: number = Math.floor(paymentBeforeTax / 1000)
const vat: number = paymentBeforeTax * vatRate
const finalPayment: number = paymentBeforeTax + vat
const isFreeShipping: boolean = paymentBeforeTax > 1500000 || isPremiumMember;

console.log("==== Online Marketplace Data ====")
console.log("Voucher Value: " + voucherValue)
console.log("VAT Rate: " + vatRate)
console.log("Is Premium Member: " + isPremiumMember)
console.log("Discount Premium Member: " + discountPremiumMember)
console.log("Subtotal: " + subTotal)
console.log("Discount Amount: " + discountAmount)
console.log("Payment Before Tax: " + paymentBeforeTax)
console.log("Reward Point: " + rewardPoint)
console.log("VAT: " + vat)
console.log("Final Payment: " + finalPayment)
console.log("Is Free Shipping: " + isFreeShipping)
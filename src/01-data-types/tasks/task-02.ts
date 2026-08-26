/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins,
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001.
 * The original price of the product is 850000 rupiahs,
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards.
 * Because the customer is a premium member, they are eligible for free shipping.
 * The current stock available in the warehouse is 18 units.
 *
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  originalPrice: number;
  discountPercentage: number;
  discountedPrice: number;
  totalPrice: number;
  quantityPurchased: number;
  isPremiumMember: boolean;
  isFreeShipping: boolean;
  stockAvailable: number;
};

const product: Product = {
  productCode: "KBR-001",
  productName: "Mechanical Keyboard RGB",
  originalPrice: 850000,
  discountPercentage: 0.25,
  discountedPrice: 850000 * (1 - 0.25),
  quantityPurchased: 2,
  totalPrice: 850000 * (1 - 0.25) * 2,
  isPremiumMember: true,
  isFreeShipping: true,
  stockAvailable: 18,
};

console.log("===== Product Data =====");
console.log(product);

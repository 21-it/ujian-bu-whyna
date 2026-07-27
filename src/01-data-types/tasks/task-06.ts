/**
 * An online marketplace sells thousands of products every day.
 * To display complete product information, the system stores a product code, product name, selling price,
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 *
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 *
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number;
  averageRating: number;
  isDiscounted: boolean;
};

const product: Product[] = [
  {
    productCode: "P001",
    productName: "Wireless Mouse",
    sellingPrice: 25.99,
    stockQuantity: 100,
    productWeight: 0.2,
    averageRating: 4.5,
    isDiscounted: true,
  },
  {
    productCode: "P002",
    productName: "Bluetooth Headphones",
    sellingPrice: 49.99,
    stockQuantity: 50,
    productWeight: 0.3,
    averageRating: 4.2,
    isDiscounted: false,
  },
  {
    productCode: "P003",
    productName: "Gaming Monitor",
    sellingPrice: 199.99,
    stockQuantity: 20,
    productWeight: 5.0,
    averageRating: 4.9,
    isDiscounted: true,
  }
];

console.log("===== Product Data =====");
console.log(product);

/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 *
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [25, 0, 18, 6, 42, 9, 0, 55, 13, 2, 30, 8, 41, 0, 16];

let totalInventory = 0;
let safeStock = 0;
let lowStock = 0;
let outOfStock = 0;

for (let i = 0; i < stocks.length; i++) {
  const stock = stocks[i];
  totalInventory = stock;

  if (stocks[i] >= 10) {
    safeStock++;
  }

  if (stocks[i] < 10) {
    lowStock++;
  }

  if ((stocks[i] = 0)) {
    outOfStock++;
  }
}

let averageStock = totalInventory / stocks.length;

console.log(`Total Inventory: ${totalInventory}`);
console.log(`Safe Stock: ${safeStock}`);
console.log(`Low Stocck: ${lowStock}`);
console.log(`Out of Stock: ${outOfStock}`);
console.log(`Average Stock Quantity: ${averageStock}`);

/**
 * An online store wants to analyze today's sales transactions.
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 *
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
  125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000,
];

let totalSales = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let transactionCount = 0;

for (let i = 0; i < sales.length; i++) {
  totalSales += sales[i];

  if (sales[i] > highestTransaction) {
    highestTransaction = sales[i];
  }

  if (sales[i] < lowestTransaction) {
    lowestTransaction = sales[i];
  }

  if (sales[i] >= 300000) {
    transactionCount++;
  }
}

let AverageRevenue = totalSales / sales.length;

console.log(`Total Revenue: ${totalSales}`);
console.log(`Highest Transaction: ${highestTransaction}`);
console.log(`Lowest Transaction: ${lowestTransaction}`);
console.log(`Number of Transaction: ${transactionCount}`);
console.log(`Average Revenue: ${AverageRevenue}`);

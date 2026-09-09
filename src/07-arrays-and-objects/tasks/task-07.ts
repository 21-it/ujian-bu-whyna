/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
  {
    id: 101,
    customer: "Andi",
    status: "completed",
    items: [
      { product: "Keyboard", price: 350000, quantity: 1 },
      { product: "Mouse", price: 150000, quantity: 2 },
    ],
  },
  {
    id: 102,
    customer: "Budi",
    status: "cancelled",
    items: [{ product: "Monitor", price: 2500000, quantity: 1 }],
  },
  {
    id: 103,
    customer: "Citra",
    status: "completed",
    items: [
      { product: "Monitor", price: 2500000, quantity: 2 },
      { product: "Keyboard", price: 350000, quantity: 1 },
    ],
  },
];

const completedOrders = orders.filter((order) => order.status === "completed");

console.log("=== 1. Completed Orders ===");
console.log(completedOrders);

const orderTotals = orders.map((order) => {
  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return {
    id: order.id,
    customer: order.customer,
    total,
  };
});

console.log("\n=== 2. Total Value of Each Order ===");
console.log(orderTotals);

const highestSpender = orderTotals.reduce((highest, order) => {
  return order.total > highest.total ? order : highest;
});

console.log("\n=== 3. Customer Who Spent the Most ===");
console.log(highestSpender);

const totalRevenue = completedOrders.reduce((total, order) => {
  const orderTotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return total + orderTotal;
}, 0);

console.log("\n=== 4. Total Revenue from Completed Orders ===");
console.log(totalRevenue);

const purchasedProducts = [
  ...new Set(
    orders.flatMap((order) => order.items.map((item) => item.product)),
  ),
];

console.log("\n=== 5. Purchased Products ===");
console.log(purchasedProducts);

/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions = [
  {
    id: "TRX001",
    customer: "Alya",
    amount: 850000,
    status: "paid",
  },
  {
    id: "TRX002",
    customer: "Budi",
    amount: 1250000,
    status: "pending",
  },
  {
    id: "TRX003",
    customer: "Citra",
    amount: 450000,
    status: "paid",
  },
  {
    id: "TRX004",
    customer: "Dimas",
    amount: 2100000,
    status: "paid",
  },
  {
    id: "TRX005",
    customer: "Eka",
    amount: 780000,
    status: "cancelled",
  },
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type Transaction = {
  id: string;
  customer: string;
  amount: number;
  status: string;
};

type TransactionResult = Transaction & {
  category: "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE";
  platformFee: number;
};

function getCustomerName(transaction: Transaction): string {
  return transaction.customer;
}

function processTransaction(transaction: Transaction): TransactionResult {
  let category: "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE";

  if (transaction.amount >= 2000000) {
    category = "HIGH VALUE";
  } else if (transaction.amount >= 1000000) {
    category = "MEDIUM VALUE";
  } else {
    category = "LOW VALUE";
  }

  let platformFee = 0;

  if (transaction.status === "paid") {
    platformFee = transaction.amount * 0.02;
  } else if (transaction.status === "pending") {
    platformFee = transaction.amount * 0.01;
  } else if (transaction.status === "cancelled") {
    platformFee = 0;
  }

  return {
    ...transaction,
    category,
    platformFee,
  };
}

function processTransactions<T>(
  arr: Transaction[],
  callback: (transaction: Transaction) => T,
): T[] {
  const results: T[] = [];

  for (const transaction of arr) {
    const result = callback(transaction);
    results.push(result);
  }

  return results;
}

const customerNames = processTransactions(transactions, getCustomerName);

console.log(`\n====== CUSTOMER NAMES ======`);
console.table(customerNames);

const transactionResults = processTransactions(
  transactions,
  processTransaction,
);

console.log(`\n====== TRANSACTION RESULT ======`);
console.table(transactionResults);

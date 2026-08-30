/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 *
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 *
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function displayProduct(product: typeof products[number]): string {
    return `${product.name} - Rp${product.price}`;
}

function displayExpensiveProduct(product: typeof products[number]): string | null {
    if (product.price > 1000000) {
        return `${product.name} - Rp${product.price}`;
    }
    return null;
}

function displayDiscountProduct(
    product: typeof products[number]
): string | null {
    if (product.price > 500000) {
        const discountPrice = product.price * 0.9;
        return `${product.name} - Rp${discountPrice}`;
    }
    return null;
}

function processProducts<T>(product: typeof products, callback: (product: typeof products[number]) => T): T[] {
    const results: T[] = [];
    for (const product of products) {
        const result = callback(product);
        results.push(result);
    }
    return results;
}

console.log("=== ALL PRODUCTS ===");
const allProducts = processProducts(products, displayProduct);
for (const product of allProducts) {
    console.log(product);
}

console.log("\n=== EXPENSIVE PRODUCTS ===");
const expensiveProducts = processProducts(products, displayExpensiveProduct);
for (const product of expensiveProducts) {
    if (product !== null) {
        console.log(product);
    }
}

console.log("\n=== DISCOUNT PRODUCTS ===");
const discountProducts = processProducts(products, displayDiscountProduct);
for (const product of discountProducts) {
    if (product !== null) {
        console.log(product);
    }
}

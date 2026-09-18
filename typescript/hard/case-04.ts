/**
 * Rules: Harus ada interaksi antar object (Aggregation / Composition).
 * Data Information: Sistem keranjang belanja E-Commerce dengan entitas `Product` dan `Cart`.
 * Requirement:
 * 1. Buat class `Product` dengan property `name` dan `price`.
 * 2. Buat class `Cart` yang memiliki private property berupa array dari object `Product`.
 * 3. Dalam `Cart`, buat method `addProduct(product: Product)` dan `calculateGrandTotal()`.
 * Expected Output: Membuat 2 object Product, memasukkannya ke dalam 1 object Cart melalui method addProduct, lalu memanggil calculateGrandTotal() untuk mendapatkan jumlah harga yang benar.
 */

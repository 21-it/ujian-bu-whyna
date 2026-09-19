/**
 * Rules: Gunakan tipe data Array, operator penugasan (Assignment Operator -=), dan kondisi if...else (sebagai pengganti Guard Clauses di level prosedural).
 * Data Information: Deklarasikan variabel array `shoppingCart` berisi nama-nama barang: `["Buku", "Sepatu"]`. Deklarasikan `balance = 1000` dan `totalPrice = 1200`.
 * Requirement:
 * Buat simulasi checkout:
 * 1. Cek pertama (if): Jika `shoppingCart.length === 0`, console.log("Keranjang belanja kosong").
 * 2. Cek kedua (else if): Jika `totalPrice` > `balance`, console.log("Saldo tidak mencukupi").
 * 3. Cek ketiga (else): Jika lolos semua di atas, kurangi `balance` dengan `totalPrice` (gunakan operator -=) lalu console.log("Checkout berhasil, sisa saldo: " + balance).
 * Expected Output: "Saldo tidak mencukupi"
 */

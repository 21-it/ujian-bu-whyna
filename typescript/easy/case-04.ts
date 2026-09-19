/**
 * Rules: Gunakan multiple `else if` untuk mengkategorikan data berjenjang.
 * Data Information: Jarak pengiriman barang dalam kilometer (number).
 * Requirement: Buat function `calculateShippingCost` yang menerima `distance`.
 * - Jika jarak <= 5 km, kembalikan "Ongkir: Rp 10.000"
 * - Jika jarak > 5 km dan <= 15 km, kembalikan "Ongkir: Rp 20.000"
 * - Jika jarak > 15 km dan <= 50 km, kembalikan "Ongkir: Rp 50.000"
 * - Jika jarak > 50 km (else), kembalikan "Pengiriman ke luar kota: Rp 100.000"
 * Expected Output: calculateShippingCost(10) menghasilkan "Ongkir: Rp 20.000".
 */

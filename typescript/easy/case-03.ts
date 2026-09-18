/**
 * Rules: Wajib menggunakan Union Types pada parameter dan Ternary Operator untuk return value (dilarang menggunakan if...else).
 * Data Information: Parameter berupa status pengiriman barang yang bisa bernilai angka (kode resi) atau string ("Pending").
 * Requirement: Buatlah function `formatDeliveryStatus` yang menerima parameter `status` bertipe `string | number`. Jika tipe datanya number, kembalikan "Paket sedang dikirim dengan resi: [nomor]". Jika string, kembalikan "Status paket: [string]". Gunakan operator `typeof`.
 * Expected Output: formatDeliveryStatus(123456) menghasilkan "Paket sedang dikirim dengan resi: 123456". formatDeliveryStatus("Pending") menghasilkan "Status paket: Pending".
 */

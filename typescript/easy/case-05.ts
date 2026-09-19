/**
 * Rules: Wajib menggunakan Nested If (If di dalam If di dalam If) untuk mengecek validasi secara berurutan.
 * Data Information: Deklarasikan 3 variabel boolean dan number: `isTicketAvailable = true`, `age = 20`, dan `isVip = false`.
 * Requirement:
 * 1. Cek terluar: Jika `isTicketAvailable` true, lanjut ke cek dalam. Jika false, console.log("Tiket habis").
 * 2. Cek dalam pertama: Jika `age` >= 18, lanjut ke cek berikutnya. Jika kurang, console.log("Belum cukup umur").
 * 3. Cek dalam kedua (terdalam): Jika `isVip` true, console.log("Akses VIP diberikan"). Jika false, console.log("Akses reguler diberikan").
 * Expected Output: "Akses reguler diberikan"
 */

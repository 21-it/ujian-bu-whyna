/**
 * Rules: Wajib menggunakan Nested If (If di dalam If).
 * Data Information: Status user saat mau menonton film. Terdiri dari `isTicketAvailable` (boolean), `isVip` (boolean), dan `age` (number).
 * Requirement: Buat function `checkMovieAccess`.
 * 1. Cek pertama: apakah tiket tersedia? Jika tidak, return "Tiket habis".
 * 2. Cek kedua (jika tiket ada): apakah umur >= 18? Jika tidak, return "Belum cukup umur".
 * 3. Cek ketiga (jika umur cukup): apakah user VIP? Jika VIP return "Akses VIP diberikan", jika tidak return "Akses reguler diberikan".
 * Expected Output: checkMovieAccess(true, false, 20) menghasilkan "Akses reguler diberikan".
 */

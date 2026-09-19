/**
 * Rules: Wajib menggunakan `Nested If` (If di dalam If).
 * Data Information: Sistem persetujuan pinjaman bank. Memiliki dua parameter: `age` (number) dan `salary` (number).
 * Requirement: Buat function `approveLoan`.
 * 1. Pengecekan pertama: Apakah `age` >= 21?
 *    - Jika TIDAK, masuk ke blok `else` dan return "Pinjaman ditolak: Usia belum mencukupi".
 *    - Jika YA, masuk ke pengecekan kedua di dalam blok tersebut (Nested If).
 * 2. Pengecekan kedua (di dalam usia >= 21): Apakah `salary` >= 5000000?
 *    - Jika YA, return "Pinjaman disetujui".
 *    - Jika TIDAK, return "Pinjaman ditolak: Pendapatan kurang".
 * Expected Output: approveLoan(25, 6000000) menghasilkan "Pinjaman disetujui". approveLoan(20, 6000000) menghasilkan "Pinjaman ditolak: Usia belum mencukupi".
 */

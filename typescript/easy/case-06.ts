/**
 * Rules: Wajib menggunakan teknik Guard Clauses (return lebih awal untuk kondisi error, tanpa menggunakan blok `else`).
 * Data Information: Validasi pendaftaran akun baru dengan parameter `username` (string) dan `password` (string).
 * Requirement: Buat function `registerAccount`.
 * - Guard 1: Jika panjang `username` kurang dari 5 karakter, langsung return "Gagal: Username minimal 5 karakter".
 * - Guard 2: Jika panjang `password` kurang dari 8 karakter, langsung return "Gagal: Password minimal 8 karakter".
 * - Jika semua guard berhasil dilewati (berada di baris paling bawah fungsi), return "Registrasi berhasil!".
 * Expected Output: registerAccount("budi", "12345678") menghasilkan "Gagal: Username minimal 5 karakter". registerAccount("budiono", "rahasia123") menghasilkan "Registrasi berhasil!".
 */

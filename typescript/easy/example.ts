/**
 * DOKUMENTASI EXAMPLE - EASY LEVEL (CONDITIONS)
 * ==============================================
 *
 * Topik: Control Flow / Conditions
 *
 * Deskripsi:
 * Contoh ini mendemonstrasikan berbagai jenis percabangan (conditions) dalam
 * satu fungsi. Terdapat penggunaan Guard Clause, if...else if...else, dan Nested If
 * untuk menentukan apakah seseorang boleh menaiki wahana Roller Coaster.
 *
 * Parameter:
 * - height (number): Tinggi badan pengunjung dalam cm.
 * - hasTicket (boolean): Apakah pengunjung memiliki tiket.
 * - isVIP (boolean): Apakah pengunjung memiliki jalur VIP.
 *
 * Return:
 * - (string): Status izin menaiki wahana.
 */

function checkRollerCoasterAccess(height: number, hasTicket: boolean, isVIP: boolean): string {
  // 1. Guard Clause: Pengecekan kondisi mutlak di awal.
  // Jika tidak punya tiket, langsung tolak tanpa perlu cek yang lain.
  if (!hasTicket) {
    return "Akses ditolak: Anda harus membeli tiket terlebih dahulu.";
  }

  // 2. if...else if...else: Menentukan kategori berdasarkan tinggi badan
  if (height < 120) {
    return "Akses ditolak: Tinggi badan Anda di bawah batas minimum (120 cm).";
  } else if (height > 200) {
    return "Akses ditolak: Tinggi badan Anda melebihi batas maksimum (200 cm).";
  } else {
    // 3. Nested if: If di dalam blok else (Tinggi badan sudah memenuhi syarat)
    if (isVIP) {
      return "Akses diizinkan: Silakan masuk melalui jalur Cepat (VIP).";
    } else {
      return "Akses diizinkan: Silakan masuk melalui jalur Reguler.";
    }
  }
}

// Test case example:
console.log(checkRollerCoasterAccess(150, true, true));
// Output: "Akses diizinkan: Silakan masuk melalui jalur Cepat (VIP)."

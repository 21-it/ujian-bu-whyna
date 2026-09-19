/**
 * DOKUMENTASI EXAMPLE - EASY LEVEL (NO FUNCTION, NO LOOP)
 * ======================================================
 *
 * Topik: Data Types, Operators & Conditions
 *
 * Deskripsi:
 * Contoh ini mendemonstrasikan evaluasi profil user untuk menentukan
 * status diskon menggunakan eksekusi prosedural (tanpa function).
 * Kita menggunakan Object, Union Types, Nested If, Logical Operator,
 * dan Ternary Operator.
 */

// 1. Data Types (Object & Union Type)
type UserStatus = "active" | "inactive" | "banned";

let userProfile = {
  name: "Budi",
  age: 25,
  isPremium: true,
  status: "active" as UserStatus
};

// 2. Deklarasi variabel penampung (Assignment Operator)
let discount = 0;
let finalMessage = "";

// 3. Conditions: if...else if...else
if (userProfile.status !== "active") {
  finalMessage = "Maaf, akun Anda tidak aktif atau dibanned.";
} else {
  // 4. Logical Operator (&&, ||) & Comparison Operator (>=, ===, <)
  if (userProfile.age >= 60 || userProfile.age <= 12) {
    discount = 50; // Lansia / anak-anak 50%
  } else if (userProfile.age > 12 && userProfile.age < 60) {

    // 5. Nested If (If di dalam If)
    if (userProfile.isPremium === true) {
      discount = 20; // Premium user dewasa 20%
    } else {
      discount = 5;  // User biasa dewasa 5%
    }

  } else {
    discount = 0;
  }

  // 6. Ternary Operator (Kondisi singkat)
  finalMessage = discount > 0
    ? `Selamat ${userProfile.name}! Anda mendapat diskon ${discount}%.`
    : `Maaf ${userProfile.name}, Anda belum mendapatkan diskon.`;
}

// Eksekusi akhir
console.log(finalMessage);
// Output: "Selamat Budi! Anda mendapat diskon 20%."

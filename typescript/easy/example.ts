/**
 * DOKUMENTASI EXAMPLE - EASY LEVEL
 * ==================================
 *
 * Topik: Data Types, Operators & Conditions
 *
 * Deskripsi:
 * Contoh ini mendemonstrasikan pembuatan profil user menggunakan Object, Array,
 * dan Union Types. Kemudian menggunakan kombinasi Guard Clauses, Nested If,
 * Logical Operator, dan Ternary Operator untuk memvalidasi dan menentukan
 * status diskon bagi pelanggan.
 */

// 1. Data Types (Primitive, Object, Array, Union Type)
type UserStatus = "active" | "inactive" | "banned"; // Union Type (Literal)

let userProfile = {
  name: "Budi",         // string
  age: 25,              // number
  isPremium: true,      // boolean
  hobbies: ["membaca", "coding"], // array of string
  status: "active" as UserStatus
};

function checkDiscountEligibility(user: typeof userProfile): string {
  // 2. Guard Clause (Return early jika kondisi awal tidak terpenuhi)
  if (user.status !== "active") {
    return "Maaf, akun Anda tidak aktif atau dibanned.";
  }

  // 3. Assignment & Arithmetic Operator
  let discount = 0;
  let basePrice = 100000;

  // 4. if...else if...else & Logical Operator (&&, ||) & Comparison Operator (>=, ===)
  if (user.age >= 60 || user.age <= 12) {
    // Kategori lansia atau anak-anak dapat diskon 50%
    discount = 50;
  } else if (user.age > 12 && user.age < 60) {

    // 5. Nested If
    if (user.isPremium === true) {
      discount = 20; // Premium user dewasa dapat diskon 20%
    } else {
      discount = 5;  // User biasa dewasa dapat diskon 5%
    }

  } else {
    discount = 0;
  }

  // 6. Ternary Operator
  const message = discount > 0
    ? `Selamat ${user.name}! Anda mendapat diskon ${discount}%.`
    : `Maaf ${user.name}, Anda belum mendapatkan diskon.`;

  return message;
}

// Test case example:
console.log(checkDiscountEligibility(userProfile));
// Output: "Selamat Budi! Anda mendapat diskon 20%."

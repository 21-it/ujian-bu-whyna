/**
 * DOKUMENTASI EXAMPLE - MEDIUM LEVEL
 * ==================================
 *
 * Topik: Function & For-Loop (Tanpa Callback/Array Methods)
 *
 * Deskripsi:
 * Function ini digunakan untuk menghitung total jumlah dari angka-angka genap
 * di dalam sebuah array angka. Kita murni menggunakan `for` loop konvensional
 * dan pengecekan kondisi `if` sederhana tanpa fungsi bantuan seperti `.filter()`
 * atau `.reduce()`.
 *
 * Parameter:
 * - numbers (number[]): Array berisi kumpulan angka.
 *
 * Return:
 * - (number): Total penjumlahan angka genap.
 */

function sumEvenNumbers(numbers: number[]): number {
  let total = 0; // Variabel penampung hasil

  // Menggunakan for-loop tradisional (bukan forEach)
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // Cek apakah angka genap (habis dibagi 2)
    if (currentNumber % 2 === 0) {
      total = total + currentNumber;
    }
  }

  return total;
}

// Test case example:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12

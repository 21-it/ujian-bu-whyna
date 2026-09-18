/**
 * Rules: Wajib menggunakan teknik Guard Clauses (menggunakan `return` lebih awal untuk kondisi error/negatif, sehingga tidak ada blok `else` atau nested if yang dalam).
 * Data Information: Sistem penarikan uang dari ATM. Memiliki parameter `balance` (saldo saat ini) dan `withdrawAmount` (jumlah yang ditarik).
 * Requirement: Buat function `processWithdrawal`.
 * - Guard 1: Jika `withdrawAmount` <= 0, langsung return "Jumlah tidak valid".
 * - Guard 2: Jika `withdrawAmount` > `balance`, langsung return "Saldo tidak mencukupi".
 * - Jika lolos semua guard, kurangi saldo dan return "Penarikan berhasil, sisa saldo: [saldo_baru]". Gunakan Assignment Operator (-=).
 * Expected Output: processWithdrawal(1000, 200) menghasilkan "Penarikan berhasil, sisa saldo: 800".
 */

/**
 * Rules: Harus mengimplementasikan class dengan encapsulation. Property saldo (balance) tidak boleh bisa diubah langsung dari luar class.
 * Data Information: Class merepresentasikan rekening bank (BankAccount) dengan data 'accountName' dan 'balance'.
 * Requirement:
 * 1. Buat class `BankAccount` dengan private property `_balance`.
 * 2. Buat method `deposit(amount)` untuk menambah saldo.
 * 3. Buat method `withdraw(amount)` untuk menarik saldo. (Harus ada validasi jika saldo tidak cukup, lempar console.error atau return string error).
 * 4. Buat getter `checkBalance()` untuk melihat saldo.
 * Expected Output: Object diinisiasi dengan saldo 1000. Setelah deposit 500 dan withdraw 200, checkBalance() menghasilkan 1300. Menarik 2000 akan gagal.
 */

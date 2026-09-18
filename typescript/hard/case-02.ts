/**
 * Rules: Harus mengimplementasikan Inheritance dan Polymorphism.
 * Data Information: Sistem perpustakaan memiliki `Item` yang bisa dipinjam, yaitu `Book` dan `DVD`.
 * Requirement:
 * 1. Buat parent class `LibraryItem` dengan property `title` dan method `getBorrowingRules()`.
 * 2. Buat child class `Book` yang extends `LibraryItem`. Override `getBorrowingRules()` yang mereturn "Buku dapat dipinjam selama 14 hari".
 * 3. Buat child class `DVD` yang extends `LibraryItem`. Override `getBorrowingRules()` yang mereturn "DVD dapat dipinjam selama 3 hari".
 * Expected Output: Memanggil getBorrowingRules() dari instansiasi Book menghasilkan teks untuk 14 hari, dan DVD menghasilkan teks untuk 3 hari.
 */

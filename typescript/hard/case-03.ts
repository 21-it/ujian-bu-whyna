/**
 * Rules: Fokus pada Encapsulation dan pembatasan nilai setter.
 * Data Information: Class SmartThermostat yang mengontrol suhu ruangan.
 * Requirement:
 * 1. Buat class `SmartThermostat` dengan private property `_temperature`.
 * 2. Buat getter untuk membaca `temperature`.
 * 3. Buat setter untuk mengubah `temperature`. Di dalam setter berikan logika validasi: suhu tidak boleh di bawah 16 derajat dan tidak boleh di atas 30 derajat. Jika melebihi batas, set ke batas terdekat (misal input 10, otomatis jadi 16).
 * Expected Output: Jika thermostat diset ke suhu 35, lalu di-console.log(), hasilnya adalah 30.
 */

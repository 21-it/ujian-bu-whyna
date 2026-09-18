/**
 * Rules: Implementasi Inheritance, Polymorphism, dan penggunaan 'protected'.
 * Data Information: Sistem kendaraan dengan base class `Vehicle` (Car, Motorcycle).
 * Requirement:
 * 1. Buat base class `Vehicle` dengan protected `_fuelCapacity` dan method abstract/virtual `calculateRange()`.
 * 2. Class `Car` asumsi konsumsi bbm 15km/liter. Range = kapasitas * 15.
 * 3. Class `Motorcycle` asumsi konsumsi bbm 45km/liter. Range = kapasitas * 45.
 * 4. Overide `calculateRange()` di kedua child class tersebut.
 * Expected Output: Jika object Car diberi bensin 10, range = 150. Jika object Motorcycle bensin 10, range = 450.
 */

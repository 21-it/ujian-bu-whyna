/**
 * Rules: Buat sistem OOP yang menggabungkan Encapsulation, Inheritance, Polymorphism, dan Object Interaction sekaligus.
 * Data Information: Simulasi sistem pertarungan (Game). Entitas `Hero` sebagai base class, `Warrior` dan `Mage` sebagai child.
 * Requirement:
 * 1. `Hero` memiliki private `_hp` (Health Points), public `name`, public `baseDamage`. Buat method `takeDamage(amount)` dan `attack(target: Hero)`.
 * 2. `Warrior` saat menyerang (override `attack`), memberikan damage `baseDamage + 10`.
 * 3. `Mage` saat menyerang, memberikan damage `baseDamage * 2`, namun HP-nya sendiri berkurang 5 (recoil/mana cost).
 * 4. Disimulasikan: object Warrior menyerang object Mage, lalu sebaliknya.
 * Expected Output: HP Mage akan berkurang sesuai damage Warrior, dan HP Warrior berkurang sangat besar sesuai damage Mage, tapi HP Mage juga ikut turun sedikit efek skill-nya.
 */

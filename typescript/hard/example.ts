/**
 * DOKUMENTASI EXAMPLE - HARD LEVEL
 * ================================
 *
 * Topik: OOP (Class, Object, Inheritance, Encapsulation, Polymorphism)
 *
 * Deskripsi:
 * Contoh di bawah mensimulasikan sistem Karyawan (Employee).
 * - Encapsulation: Properti '_salary' disembunyikan menggunakan 'protected/private'
 *   dan diakses/diubah melalui method.
 * - Inheritance: Class 'Developer' dan 'Manager' mewarisi sifat dari 'Employee'.
 * - Polymorphism: Method 'calculateBonus()' di-override (ditimpa) oleh masing-masing
 *   child class dengan perhitungan/logika yang berbeda.
 */

// 1. Base Class
class Employee {
  public name: string;
  protected _salary: number; // Encapsulation

  constructor(name: string, salary: number) {
    this.name = name;
    this._salary = salary;
  }

  public getSalary(): number {
    return this._salary;
  }

  // Base method yang akan di-polymorph
  public calculateBonus(): number {
    return this._salary * 0.05; // Default bonus 5%
  }
}

// 2. Inheritance
class Developer extends Employee {
  public techStack: string;

  constructor(name: string, salary: number, techStack: string) {
    super(name, salary);
    this.techStack = techStack;
  }

  // 3. Polymorphism (Overriding base method)
  public calculateBonus(): number {
    return this._salary * 0.10; // Bonus dev 10%
  }
}

// 2. Inheritance
class Manager extends Employee {
  public teamSize: number;

  constructor(name: string, salary: number, teamSize: number) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  // 3. Polymorphism
  public calculateBonus(): number {
    // Bonus manager 15% + tambahan berdasarkan jumlah tim
    return (this._salary * 0.15) + (this.teamSize * 500);
  }
}

// Object Instantiation & Test
const dev = new Developer("Andi", 10000, "TypeScript");
const mgr = new Manager("Budi", 20000, 5);

console.log(`${dev.name} Bonus: ${dev.calculateBonus()}`); // 1000
console.log(`${mgr.name} Bonus: ${mgr.calculateBonus()}`); // 3000 + 2500 = 5500

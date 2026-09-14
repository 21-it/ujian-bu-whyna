/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 *
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 *
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */

class KayuAsli {
  public kayuAsliId: string;
  public name: string;
  public position: string;
  private basicSalary: number;
  private bonus: number;

  constructor(
    kayuAsliId: string,
    name: string,
    position: string,
    basicSalary: number,
    bonus = 0,
  ) {
    this.kayuAsliId = kayuAsliId
    this.name = name
    this.position = position
    this.basicSalary = basicSalary
    this.bonus = bonus
  }

  public getBasicSalary(): number {
    return this.basicSalary
  }

  public setBasicSalary(salary: number): void {
    if (salary > 0) {
      this.basicSalary = salary
    } else {
      console.log(`Salary tidak boleh 0 lho ya....`)
    }
  }

  public addBonus(amount: number): void {
    if (amount >= 0) {
      this.bonus += amount
    } else {
      console.log(`Nice try, coba lagi kapan-kapan....`)
    }
  }

  public getTotalSalary(): number {
    return this.basicSalary + this.bonus
  }

  public showProfile(): void {
    console.log(`Employee ID: ${this.kayuAsliId}`)
    console.log(`Name: ${this.name}`)
    console.log(`Position: ${this.position}`)
    console.log(`Basic Salary: ${this.basicSalary}`)
    console.log(`Bonus: ${this.bonus}`)
  }
}

const kayuasli = new KayuAsli("EMP001", "Kevin De Bruyne", "Senior Developer", 12000000)

kayuasli.addBonus(2000000)
console.log(`Basic Salary: ${kayuasli.getBasicSalary()}`)
console.log(`Total Salary: ${kayuasli.getTotalSalary()}`)
kayuasli.showProfile()

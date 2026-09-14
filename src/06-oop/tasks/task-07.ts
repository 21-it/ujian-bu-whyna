/**
 * A company has different types of employees.
 * Every employee has:
 * - Name
 * - Employee ID
 * - Basic salary
 *
 * However, the way their total salary is calculated differs.
 * - Full-Time Employee receive Basic Salary + Fixed Allowance
 * - Part-Time Employee receive Basic Salary + Hours Worked × Hourly Rate
 *
 * example:
 * Fulltime Employee
 * Name: Mohamed Salah
 * Basic Salary: Rp8,000,000
 * Allowance: Rp1,500,000
 *
 * ParttimeEmployee
 * Name: Erling Haaland
 * Basic Salary: Rp2,000,000
 * Hours Worked: 40
 * Hourly Rate: Rp50,000
 *
 */

class Employee {
    public name: string;
    public employeeID: string;
    protected basicSalary: number;
    constructor(
        name: string,
        employeeID: string,
        basicSalary: number,
    ) {
        this.name = name
        this.employeeID = employeeID
        this.basicSalary = basicSalary
    }

    calculateSalary(): number {
        return this.basicSalary
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary(): number {
        const fixedAllowance = 1500000
        return this.basicSalary + fixedAllowance
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(): number {
        const hourlyWorked = 40
        const hourlyLate = 50000
        return this.basicSalary + (hourlyWorked * hourlyLate)
    }
}

/** implement of polymorphism */
const employees: Employee[] = [
    new FullTimeEmployee(`Mohamed Salah`, `111`, 8000000),
    new PartTimeEmployee(`Erling Haaland`, `112`, 2000000)
]

for (const employee of employees) {
    console.log(`${employee.name} receive ${employee.calculateSalary()}`);
}

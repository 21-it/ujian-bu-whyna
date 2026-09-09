/**
 * A company has employee salary data below.
 *
 * HR wants to process the same employee data using different rules:
 * - Calculate final salary.
 * - Determine bonus eligibility.
 * - Generate employee performance status.
 *
 * Bonus rules:
 * - Performance >= 90 → 15% bonus + "Exceeds Expectations"
 * - Performance >= 80 → 10% bonus + "Meets Expectations"
 * - Performance >= 70 → 5% bonus + "Needs Improvement"
 * - Below 70 → no bonus + "Unsatisfactory"
 */

type Employee = {
  name: string;
  salary: number;
  performance: number;
};

type PERFORMANCE_STATUS =
  | "Exceeds Expectations"
  | "Meets Expectations"
  | "Needs Improvement"
  | "Unsatisfactory";

type EMPLOYEE_BONUS = Employee & {
  bonus: number;
  finalSalary: number;
};

type EMPLOYEE_PERFORMANCE = Employee & {
  status: PERFORMANCE_STATUS;
};

const employees: Employee[] = [
  { name: "Alya", salary: 5000000, performance: 92 },
  { name: "Budi", salary: 6500000, performance: 78 },
  { name: "Citra", salary: 7200000, performance: 88 },
  { name: "Dimas", salary: 4500000, performance: 95 },
  { name: "Eka", salary: 8000000, performance: 69 },
];

function calculateFinalSalary(selectedEmployee: Employee): EMPLOYEE_BONUS {
  let bonusRate = 0;

  if (selectedEmployee.performance >= 90) {
    bonusRate = 0.15;
  } else if (selectedEmployee.performance >= 80) {
    bonusRate = 0.1;
  } else if (selectedEmployee.performance >= 70) {
    bonusRate = 0.05;
  }

  const bonus = selectedEmployee.salary * bonusRate;
  const finalSalary = selectedEmployee.salary + bonus;

  return {
    ...selectedEmployee,
    bonus,
    finalSalary,
  };
}

function getPerformanceStatus(
  selectedEmployee: Employee,
): EMPLOYEE_PERFORMANCE {
  let status: PERFORMANCE_STATUS;

  if (selectedEmployee.performance >= 90) {
    status = "Exceeds Expectations";
  } else if (selectedEmployee.performance >= 80) {
    status = "Meets Expectations";
  } else if (selectedEmployee.performance >= 70) {
    status = "Needs Improvement";
  } else {
    status = "Unsatisfactory";
  }

  return {
    ...selectedEmployee,
    status,
  };
}

function employeeProcess<T>(
  arr: Employee[],
  callback: (employee: Employee) => T,
): T[] {
  return arr.map(callback);
}

const employeeWithFinalSalary = employeeProcess(
  employees,
  calculateFinalSalary,
);

const employeeWithPerformanceStatus = employeeProcess(
  employees,
  getPerformanceStatus,
);

console.log(`\n====== EMPLOYEES WITH FINAL SALARY + BONUS ======`);
console.log({ employees: employeeWithFinalSalary });

console.log(`\n====== EMPLOYEES WITH PERFORMANCE STATUS ======`);
console.log({ employees: employeeWithPerformanceStatus });

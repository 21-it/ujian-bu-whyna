/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 *
 * Student Tasks
 * Design a program using multiple reusable functions.
 *
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
  {
    id: "PT001",
    name: "Alya",
    age: 17,
    department: "Pediatrics",
    admitted: true,
    bill: 850000,
  },
  {
    id: "PT002",
    name: "Budi",
    age: 45,
    department: "Cardiology",
    admitted: false,
    bill: 1200000,
  },
  {
    id: "PT003",
    name: "Citra",
    age: 68,
    department: "Cardiology",
    admitted: true,
    bill: 2500000,
  },
  {
    id: "PT004",
    name: "Dimas",
    age: 33,
    department: "Orthopedics",
    admitted: true,
    bill: 640000,
  },
  {
    id: "PT005",
    name: "Eka",
    age: 14,
    department: "Pediatrics",
    admitted: false,
    bill: 350000,
  },
];

function countTotalPatient(): number {
  return patients.length;
}

function countAdmittedPatient(): number {
  let countAdmitted = 0;
  for (const patient of patients) {
    if (patient.admitted) {
      countAdmitted++;
    }
  }
  return countAdmitted;
}

function countDischargedPatient(): number {
  let countDischarged = 0;
  for (const patient of patients) {
    if (!patient.admitted) {
      countDischarged++;
    }
  }
  return countDischarged;
}

function countPatientByDepartment(department: string): number {
  let countPatientDepartment = 0;
  for (const patient of patients) {
    if (patient.department === department) {
      countPatientDepartment++;
    }
  }
  return countPatientDepartment;
}

function highestBill(): number {
  let highest = patients[0].bill;
  for (const patient of patients) {
    if (patient.bill > highest) {
      highest = patient.bill;
    }
  }
  return highest;
}

function lowestBill(): number {
  let lowest = patients[0].bill;
  for (const patient of patients) {
    if (patient.bill > lowest) {
      lowest = patient.bill;
    }
  }
  return lowest;
}

function countAverageBill(): number {
  let totalBill = 0;
  for (const patient of patients) {
    totalBill += patient.bill;
  }
  return totalBill / patients.length;
}

function totalHospitalRevenue(): number {
  let totalRevenue = 0;
  for (const patient of patients) {
    totalRevenue += patient.bill;
  }
  return totalRevenue;
}

function admittedPatientName(): string[] {
  const names: string[] = [];
  for (const patient of patients) {
    if (patient.admitted) {
      names.push(patient.name);
    }
  }
  return names;
}

function printHospitalReport(): void {
  console.log(`Total Patient: ${countTotalPatient()}`);
  console.log(`Total Admitted Patient: ${countAdmittedPatient()}`);
  console.log(`Total Discharged Patient: ${countDischargedPatient()}`);
  console.log(
    `Total Pediatrics Patient: ${countPatientByDepartment("Pediatrics")}`,
  );
  console.log(
    `Total Cardiology Patient: ${countPatientByDepartment("Cardiology")}`,
  );
  console.log(
    `Total Orthopedics Patient: ${countPatientByDepartment("Orthopedics")}`,
  );
  console.log(`Total Highest Bill:  ${highestBill()}`);
  console.log(`Total Lowest Bill: ${lowestBill()}`);
  console.log(`Total Average Bill: ${countAverageBill()}`);
  console.log(`Total Hospital Revenue: ${totalHospitalRevenue()}`);
  console.log(`Patient Name: ${admittedPatientName()}`);
}

printHospitalReport();

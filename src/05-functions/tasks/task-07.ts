/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 *
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true,
  },
  {
    name: "Budi",
    major: "Networking",
    active: false,
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true,
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true,
  },
  {
    name: "Eka",
    major: "Networking",
    active: false,
  },
];

function countActiveStudents(): number {
  let countActive = 0;
  for (const student of students) {
    if (student.active) {
      countActive++;
    }
  }
  return countActive;
}

function countInactiveStudents(): number {
  let countInactive = 0;
  for (const student of students) {
    if (!student.active) {
      countInactive++;
    }
  }
  return countInactive;
}

function countStudentsByMajor(major: string): number {
  let countMajor = 0;
  for (const student of students) {
    if (student.major === major) {
      countMajor++;
    }
  }
  return countMajor;
}

function printEnrollmentReport(): void {
  console.log(`Total Students: ${students.length}`);
  console.log(`Active Students: ${countActiveStudents()}`);
  console.log(`Active Students: ${countInactiveStudents()}`);
  console.log(
    `Software Engineering Student: ${countStudentsByMajor("Software Engineering")}`,
  );
  console.log(`Networking Student: ${countStudentsByMajor("Networking")}`);
  console.log(`Multimedia Student: ${countStudentsByMajor("Multimedia")}`);
}

printEnrollmentReport();

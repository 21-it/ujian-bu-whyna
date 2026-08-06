/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: false },
  { name: "Citra", present: true },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
];

function printAttendanceReport(attendance: typeof attendances): void {
  let thePresent = 0;
  let theAbsent = 0;

  for (let i = 0; i < attendances.length; i++) {
    const student = attendances[i];
    if (student.present) {
      thePresent++;
    } else {
      theAbsent++;
      console.log(student.name);
    }
  }
  console.log(`Total Present: ${thePresent}`);
  console.log(`Total Absent: ${theAbsent}`);
}

printAttendanceReport(attendances);

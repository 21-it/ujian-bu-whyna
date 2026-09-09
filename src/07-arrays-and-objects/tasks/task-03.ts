/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
  { id: 1, name: "Andi" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Citra" },
  { id: 4, name: "Deni" },
];

const attendance = [
  { studentId: 1, status: "present" },
  { studentId: 2, status: "absent" },
  { studentId: 3, status: "present" },
  { studentId: 4, status: "late" },
];

console.log("=== Attendance Analysis ===");

const presentStudents = attendance
  .filter((item) => item.status === "present")
  .map((item) => {
    const student = students.find((student) => student.id === item.studentId);
    return student?.name;
  })
  .filter((name): name is string => name !== undefined);
console.log("\nPresent students:", presentStudents);

const absentStudents = attendance
  .filter((item) => item.status === "absent")
  .map((item) => {
    const student = students.find((student) => student.id === item.studentId);
    return student?.name;
  })
  .filter((name): name is string => name !== undefined);
console.log("\nAbsent students:", absentStudents);

const lateStudents = attendance
  .filter((item) => item.status === "late")
  .map((item) => {
    const student = students.find((student) => student.id === item.studentId);
    return student?.name;
  })
  .filter((name): name is string => name !== undefined);
console.log("\nLate students:", lateStudents);

const studentAttendance = students.map((student) => {
  const attendanceData = attendance.find(
    (item) => item.studentId === student.id,
  );
  return { name: student.name, status: attendanceData?.status };
});

console.log("Student attendance:", studentAttendance);

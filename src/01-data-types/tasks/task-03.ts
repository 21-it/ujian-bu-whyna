/**
 * SMK Telkom Malang is developing a new Student Information System.
 * Before students can use the system, the administrator must record each student's basic information.
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 *
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 *
 * display the student data using console.log.
 */

type Student = {
  studentID: string;
  fullName: string;
  age: number;
  isActive: boolean;
};

const student: Student[] = [
  {
    studentID: "S001",
    fullName: "John Doe",
    age: 16,
    isActive: true,
  },
  {
    studentID: "S002",
    fullName: "Jane Smith",
    age: 17,
    isActive: false,
  },
  {
    studentID: "S003",
    fullName: "Alice Johnson",
    age: 16,
    isActive: true,
  }
];

console.log("===== Student Data =====");
console.log(student);
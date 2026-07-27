/**
 * An online learning platform allows students to register for programming courses.
 * Every registration stores information about both the student and the selected course.
 * Student information includes student ID, full name, and grade level.
 * Course information includes the course ID, course title, instructor name,
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 *
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 *
 * display the registration data using console.log.
 */

type Registration = {
  studentId: string;
  fullName: string;
  gradeLevel: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: Date;
  paymentCompleted: boolean;
};

const registrations: Registration[] = [
  {
    studentId: "S001",
    fullName: "Alice Johnson",
    gradeLevel: "10th Grade",
    courseId: "C001",
    courseTitle: "Introduction to TypeScript",
    instructorName: "John Smith",
    totalLearningHours: 20,
    registrationDate: new Date("2024-01-15"),
    paymentCompleted: true,
  },
  {
    studentId: "S002",
    fullName: "Bob Williams",
    gradeLevel: "11th Grade",
    courseId: "C002",
    courseTitle: "Advanced JavaScript",
    instructorName: "Jane Doe",
    totalLearningHours: 30,
    registrationDate: new Date("2024-02-10"),
    paymentCompleted: false,
  },
  {
    studentId: "S003",
    fullName: "Charlie Brown",
    gradeLevel: "12th Grade",
    courseId: "C003",
    courseTitle: "Web Development with React",
    instructorName: "Emily Davis",
    totalLearningHours: 25,
    registrationDate: new Date("2024-03-05"),
    paymentCompleted: true,
  }
];

console.log("===== Registration Data =====");
console.log(registrations);
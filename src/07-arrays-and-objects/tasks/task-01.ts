/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70.
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 *
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

console.log("\n=== Student Analysis ===");
const studentNames = students.map((student) => student.name);
console.log("Student names:", studentNames);

const passedStudents = students.filter((student) => student.score >= 70);
console.log("\nPassed students:", passedStudents);

const citra = students.find((student) => student.name === "Citra");
console.log("\nFind Citra:", citra);

const totalScore = students.reduce((sum, student) => sum + student.score, 0);

const averageScore = totalScore / students.length;
console.log("\nAverage score:", averageScore);

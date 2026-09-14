/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 *
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
  { name: "Alya", score: 88 },
  { name: "Budi", score: 71 },
  { name: "Citra", score: 95 },
  { name: "Dimas", score: 63 },
  { name: "Eka", score: 84 },
  { name: "Fajar", score: 79 },
  { name: "Gita", score: 92 },
  { name: "Hana", score: 67 },
];

let totalScore = 0;
let aStudent = 0;
let bStudent = 0;
let cStudent = 0;
let dStudent = 0;
let higestScore = 0;
let lowestScore = 0;

console.log("=== Backend Student Result ===");

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  totalScore = student.score;
  if (student.score > 89 && student.score < 101) {
    aStudent++;
  }

  if (student.score > 79 && student.score < 90) {
    bStudent++;
  }

  if (student.score > 69 && student.score < 80) {
    cStudent++;
  }

  if (student.score < 70) {
    dStudent++;
  }

  if (student.score > higestScore) {
    higestScore = student.score;
  }

  if (student.score < lowestScore) {
    lowestScore = student.score;
  }
}

let averageScore = totalScore / students.length;

console.log(`A Student: ${aStudent}`);
console.log(`B Student: ${bStudent}`);
console.log(`C Student: ${cStudent}`);
console.log(`D Student: ${dStudent}`);
console.log(`Highest Score: ${higestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore}`);

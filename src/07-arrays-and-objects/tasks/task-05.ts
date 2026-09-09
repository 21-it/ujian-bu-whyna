/**
 * You are developing a simple exam analytics system.
 * Tasks:
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score
 * 4. Calculate class's average score
 */

const students = [
  {
    id: 1,
    name: "Andi",
    answers: ["A", "B", "C", "A", "B"],
  },
  {
    id: 2,
    name: "Budi",
    answers: ["A", "C", "C", "A", "D"],
  },
  {
    id: 3,
    name: "Citra",
    answers: ["B", "B", "C", "A", "B"],
  },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

console.log("=== Exam Analytics ===");

const studentResults = students.map((student) => {
  const correctCount = student.answers.reduce((count, answer, index) => {
    if (answer === correctAnswers[index]) {
      return count + 1;
    }
    return count;
  }, 0);
  const score = correctCount * 20;
  return { ...student, score };
});
console.log("\nStudent scores:", studentResults);

const passedStudents = studentResults.filter((student) => student.score > 70);
console.log("\nPassed students:", passedStudents);

const highestScoreStudent = studentResults.reduce((highest, student) =>
  student.score > highest.score ? student : highest,
);
console.log("\nHighest score student:", highestScoreStudent);

const averageScore =
  studentResults.reduce((total, student) => total + student.score, 0) /
  studentResults.length;
console.log("\nClass average score:", averageScore);

/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 *
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 },
];

let submittedStudents = 0;
let notSubmittedStudents = 0;
let passedStudents = 0;
let reviseStudents = 0;
let totalScore = 0;

console.log("Students Who Did Not Submit:");
for (let i = 0; i < submissions.length; i++) {
  const submission = submissions[i];

  totalScore += submission.score;

  if (submission.submitted) {
    submittedStudents++;

    if (submission.score >= 75) {
      passedStudents++;
    } else {
      reviseStudents++;
    }
  } else {
    notSubmittedStudents++;
    console.log(`- ${submission.student}`);
  }
}

console.log("\nStudents Who Must Revise:");
for (let i = 0; i < submissions.length; i++) {
  const submission = submissions[i];

  if (submission.submitted && submission.score < 75) {
    console.log(`- ${submission.student}`);
  }
}

const averageScore = totalScore / submissions.length;

console.log("\n=== LMS Summary ===");
console.log(`Submitted Students: ${submittedStudents}`);
console.log(`Not Submitted: ${notSubmittedStudents}`);
console.log(`Passed Students: ${passedStudents}`);
console.log(`Students Must Revise: ${reviseStudents}`);
console.log(`Average Class Score: ${averageScore}`);

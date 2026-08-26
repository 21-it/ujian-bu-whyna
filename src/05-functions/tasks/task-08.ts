import { count } from "node:console";

/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 *
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 *
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 *
 */
const submissions = [
  {
    student: "Alya",
    submitted: true,
    score: 90,
  },
  {
    student: "Budi",
    submitted: false,
    score: 0,
  },
  {
    student: "Citra",
    submitted: true,
    score: 84,
  },
  {
    student: "Dimas",
    submitted: true,
    score: 72,
  },
  {
    student: "Eka",
    submitted: false,
    score: 0,
  },
  {
    student: "Fajar",
    submitted: true,
    score: 96,
  },
];

const passingScore = 75;

function countTotalStudent(): number {
  return submissions.length;
}

function countSubmittedAssignments(): number {
  let countSubmittted = 0;
  for (const submission of submissions) {
    if (submission.submitted) {
      countSubmittted++;
    }
  }
  return countSubmittted;
}

function countMissingAssignments(): number {
  let countMissing = 0;
  for (const submission of submissions) {
    if (!submission.submitted) {
      countMissing++;
    }
  }
  return countMissing;
}

function countPassedStudents(): number {
  let countPassed = 0;
  for (const submission of submissions) {
    if (submission.submitted && submission.score >= passingScore) {
      countPassed++;
    }
  }
  return countPassed;
}

function countStudentRequiringRevision(): number {
  let countRevision = 0;
  for (const submission of submissions) {
    if (submission.submitted && submission.score <= passingScore) {
      countRevision++;
    }
  }
  return countRevision;
}

function countAverageScore(): number {
  let totalScore = 0;
  for (const submission of submissions) {
    totalScore += submission.score;
  }
  return totalScore / submissions.length;
}

function countHighestScore(): number {
  let highest = submissions[0].score;
  for (const submission of submissions) {
    if (submission.score > highest) {
      highest = submission.score;
    }
  }
  return highest;
}

function countLowestScore(): number {
  let lowest = submissions[0].score;
  for (const submission of submissions) {
    if (submission.score < lowest) {
      lowest = submission.score;
    }
  }
  return lowest;
}

function printSubmissionReport(): void {
  console.log(`Total Student: ${countTotalStudent()}`);
  console.log(`Total Submitted Assignment: ${countSubmittedAssignments()}`);
  console.log(`Total Missing Assignment: ${countMissingAssignments()}`);
  console.log(`Total Passed Assignment: ${countPassedStudents()}`);
  console.log(
    `Total Student Remaining Revision: ${countStudentRequiringRevision()}`,
  );
  console.log(`Total Average Score: ${countAverageScore()}`);
  console.log(`Highest Score: ${countHighestScore()}`);
  console.log(`Lowest Score: ${countLowestScore()}`);
}

printSubmissionReport();

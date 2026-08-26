/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 *
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 *
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 *
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 *
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
  {
    student: "Alya",
    course: "TypeScript",
    completed: true,
    score: 91,
    duration: 38,
  },
  {
    student: "Budi",
    course: "TypeScript",
    completed: false,
    score: 45,
    duration: 12,
  },
  {
    student: "Citra",
    course: "Database",
    completed: true,
    score: 87,
    duration: 42,
  },
  {
    student: "Dimas",
    course: "Backend",
    completed: true,
    score: 96,
    duration: 40,
  },
  {
    student: "Eka",
    course: "Database",
    completed: false,
    score: 60,
    duration: 18,
  },
  {
    student: "Fajar",
    course: "Backend",
    completed: true,
    score: 82,
    duration: 35,
  },
  {
    student: "Gita",
    course: "TypeScript",
    completed: true,
    score: 88,
    duration: 36,
  },
  {
    student: "Hana",
    course: "Backend",
    completed: false,
    score: 70,
    duration: 20,
  },
];

const passingScore = 75;

function countTotalEnrollments(): number {
  return enrollments.length;
}

function countCompletedEnrollments(): number {
  let count = 0;

  for (const enrollment of enrollments) {
    if (enrollment.completed) {
      count++;
    }
  }

  return count;
}

function countIncompleteEnrollments(): number {
  let count = 0;

  for (const enrollment of enrollments) {
    if (!enrollment.completed) {
      count++;
    }
  }

  return count;
}

function calculateCompletionPercentage(): number {
  return (countCompletedEnrollments() / countTotalEnrollments()) * 100;
}

function findHighestScore(): number {
  let highest = enrollments[0].score;

  for (const enrollment of enrollments) {
    if (enrollment.score > highest) {
      highest = enrollment.score;
    }
  }

  return highest;
}

function findLowestScore(): number {
  let lowest = enrollments[0].score;

  for (const enrollment of enrollments) {
    if (enrollment.score < lowest) {
      lowest = enrollment.score;
    }
  }

  return lowest;
}

function calculateAverageScore(): number {
  let totalScore = 0;

  for (const enrollment of enrollments) {
    totalScore += enrollment.score;
  }

  return totalScore / countTotalEnrollments();
}

function countPassingStudents(): number {
  let count = 0;

  for (const enrollment of enrollments) {
    if (enrollment.score >= passingScore) {
      count++;
    }
  }

  return count;
}

function countStudentsByCourse(course: string): number {
  let count = 0;

  for (const enrollment of enrollments) {
    if (enrollment.course === course) {
      count++;
    }
  }

  return count;
}

function calculateAverageScoreByCourse(course: string): number {
  let totalScore = 0;
  let count = 0;

  for (const enrollment of enrollments) {
    if (enrollment.course === course) {
      totalScore += enrollment.score;
      count++;
    }
  }

  return count === 0 ? 0 : totalScore / count;
}

function calculateTotalLearningHours(): number {
  let totalDuration = 0;

  for (const enrollment of enrollments) {
    totalDuration += enrollment.duration;
  }

  return totalDuration / 60;
}

function calculateAverageLearningDuration(): number {
  let totalDuration = 0;

  for (const enrollment of enrollments) {
    totalDuration += enrollment.duration;
  }

  return totalDuration / countTotalEnrollments();
}

function getCompletionRateText(): string {
  return `${calculateCompletionPercentage().toFixed(2)}%`;
}

function calculatePassingPercentage(): number {
  return (countPassingStudents() / countTotalEnrollments()) * 100;
}

function printAcademicStatistics(): void {
  console.log("=== Academic Statistics ===");

  console.log("Highest score:", findHighestScore());

  console.log("Lowest score:", findLowestScore());

  console.log("Average score:", calculateAverageScore());

  console.log("Students with passing scores:", countPassingStudents());
}

function printLearningDashboard(): void {
  console.log("=== Online Learning Dashboard ===");

  // Completion Statistics
  console.log("=== Completion Statistics ===");

  console.log("Total enrollments:", countTotalEnrollments());

  console.log("Completed enrollments:", countCompletedEnrollments());

  console.log("Incomplete enrollments:", countIncompleteEnrollments());

  console.log("Completion percentage:", getCompletionRateText());

  // Academic Statistics
  printAcademicStatistics();

  // Course Statistics
  console.log("=== Course Statistics ===");

  console.log("TypeScript students:", countStudentsByCourse("TypeScript"));

  console.log(
    "TypeScript average score:",
    calculateAverageScoreByCourse("TypeScript"),
  );

  console.log("Database students:", countStudentsByCourse("Database"));

  console.log(
    "Database average score:",
    calculateAverageScoreByCourse("Database"),
  );

  console.log("Backend students:", countStudentsByCourse("Backend"));

  console.log(
    "Backend average score:",
    calculateAverageScoreByCourse("Backend"),
  );

  // Learning Statistics
  console.log("=== Learning Statistics ===");

  console.log("Total learning hours:", calculateTotalLearningHours());

  console.log("Average learning duration:", calculateAverageLearningDuration());
}

// ======================================================
// RUN PROGRAM
// ======================================================

printLearningDashboard();

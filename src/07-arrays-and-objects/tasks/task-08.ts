/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
  {
    name: "Andi",
    department: "Backend",
    projects: [
      { name: "LMS", score: 90 },
      { name: "Payment", score: 85 },
      { name: "API", score: 95 },
    ],
  },
  {
    name: "Budi",
    department: "Frontend",
    projects: [
      { name: "Dashboard", score: 80 },
      { name: "Landing Page", score: 75 },
    ],
  },
  {
    name: "Citra",
    department: "Backend",
    projects: [
      { name: "LMS", score: 95 },
      { name: "API", score: 88 },
    ],
  },
];

const employeeAverages = employees.map((employee) => {
  const totalScore = employee.projects.reduce(
    (sum, project) => sum + project.score,
    0,
  );

  const averageScore = totalScore / employee.projects.length;

  return {
    name: employee.name,
    averageScore,
  };
});

console.log("=== 1. Employee Average Scores ===");
console.log(employeeAverages);

const above85 = employeeAverages.filter(
  (employee) => employee.averageScore > 85,
);

console.log("\n=== 2. Average Score Above 85 ===");
console.log(above85);

const below80 = employees.filter((employee) =>
  employee.projects.some((project) => project.score < 80),
);

console.log("\n=== 3. At Least One Project Below 80 ===");
console.log(below80);

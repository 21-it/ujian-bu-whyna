/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
  {
    id: 1,
    question: "What is TypeScript?",
    correctAnswer: "A",
    category: "TypeScript",
  },
  {
    id: 2,
    question: "Which method transforms an array?",
    correctAnswer: "B",
    category: "Array",
  },
  {
    id: 3,
    question: "Which method filters an array?",
    correctAnswer: "C",
    category: "Array",
  },
  {
    id: 4,
    question: "What does reduce() do?",
    correctAnswer: "D",
    category: "Array",
  },
];

const submissions = [
  {
    student: "Andi",
    answers: [
      { questionId: 1, answer: "A" },
      { questionId: 2, answer: "B" },
      { questionId: 3, answer: "C" },
      { questionId: 4, answer: "D" },
    ],
  },
  {
    student: "Budi",
    answers: [
      { questionId: 1, answer: "B" },
      { questionId: 2, answer: "B" },
      { questionId: 3, answer: "A" },
      { questionId: 4, answer: "D" },
    ],
  },
  {
    student: "Citra",
    answers: [
      { questionId: 1, answer: "A" },
      { questionId: 2, answer: "C" },
      { questionId: 3, answer: "C" },
      { questionId: 4, answer: "B" },
    ],
  },
];

const POINTS_PER_CORRECT_ANSWER = 25;
const PASSING_SCORE = 75;

const studentScores = submissions.map((submission) => {
  const correct = submission.answers.filter((answer) => {
    const question = questions.find(
      (question) => question.id === answer.questionId,
    );

    return question?.correctAnswer === answer.answer;
  }).length;

  const score = correct * POINTS_PER_CORRECT_ANSWER;

  return {
    student: submission.student,
    score,
  };
});

console.log("=== 1. Student Scores ===");
console.log(studentScores);

const answerResults = submissions.map((submission) => {
  const correct = submission.answers.filter((answer) => {
    const question = questions.find(
      (question) => question.id === answer.questionId,
    );

    return question?.correctAnswer === answer.answer;
  }).length;

  const wrong = submission.answers.length - correct;

  return {
    student: submission.student,
    correct,
    wrong,
  };
});

console.log("\n=== 2. Correct and Wrong Answers ===");
console.log(answerResults);

const categories = [...new Set(questions.map((question) => question.category))];

const categoryAverages = categories.map((category) => {
  const categoryQuestions = questions.filter(
    (question) => question.category === category,
  );

  const categoryScores = submissions.map((submission) => {
    const correctAnswers = submission.answers.filter((answer) => {
      const question = categoryQuestions.find(
        (question) => question.id === answer.questionId,
      );

      return question?.correctAnswer === answer.answer;
    }).length;

    return (correctAnswers / categoryQuestions.length) * 100;
  });

  const averageScore =
    categoryScores.reduce((sum, score) => sum + score, 0) /
    categoryScores.length;

  return {
    category,
    averageScore: Number(averageScore.toFixed(2)),
  };
});

console.log("\n=== 3. Average Score by Category ===");
console.log(categoryAverages);

const totalStudents = studentScores.length;

const totalScore = studentScores.reduce(
  (sum, student) => sum + student.score,
  0,
);

const averageScore = Number((totalScore / totalStudents).toFixed(2));

const highestScore = Math.max(...studentScores.map((student) => student.score));

const lowestScore = Math.min(...studentScores.map((student) => student.score));

const passedStudents = studentScores.filter(
  (student) => student.score >= PASSING_SCORE,
).length;

const failedStudents = totalStudents - passedStudents;

const passRate = Number(((passedStudents / totalStudents) * 100).toFixed(2));

const finalAnalytics = {
  totalStudents,
  averageScore,
  highestScore,
  lowestScore,
  passedStudents,
  failedStudents,
  passRate,
};

console.log("\n=== 4. Final Exam Analytics ===");
console.log(finalAnalytics);

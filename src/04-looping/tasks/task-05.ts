/**
 * A programming competition stores participants' scores in the following array.
<<<<<<< HEAD
 *
 *
=======
 *
 *
>>>>>>> assign/main
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 *
 *
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
  98, 76, 85, 62, 91, 73, 88, 59, 100, 81, 67, 79, 94, 83, 71, 96, 65, 87, 74,
  90,
];

let totalScore = 0;
let goldMedal = 0;
let silverMedal = 0;
let bronzeMedal = 0;
let withoutMedal = 0;

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  totalScore = score;

  if (scores[i] >= 95) {
    goldMedal++;
  }  else if (scores[i] > 84 && scores[i] < 95) {
    silverMedal++
  }  else if (scores[i] > 74 && scores[i] < 85) {
    bronzeMedal++
  }  else {
    scores[i] < 75;
    withoutMedal++
  }
}

let averageScore = totalScore / scores.length;

console.log(`Gold Medal Winners: ${goldMedal}`);
console.log(`Silver Medal Winners: ${silverMedal}`);
console.log(`Bronze Medal Winners: ${bronzeMedal}`);
console.log(`Winners Without Medal: ${withoutMedal}`);
console.log(`Avergae Competition: ${averageScore}`);

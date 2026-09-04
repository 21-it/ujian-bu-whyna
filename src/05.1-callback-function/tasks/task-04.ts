/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 *
 * 3. Calculate a score after adding 5 bonus points.
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 *
 *
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function checkPassing(score: number): string {
    if (score >= 70) {
        return `${score} -> PASS`;
    } else {
        return `${score} -> FAIL`;
    }
}

function determineGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "D";
    }
}

function addBonus(score: number): string {
    const bonusScore = score + 5;

    if (bonusScore > 90) {
        return `${score} + 5 = ${bonusScore} -> Excellent`;
    } else {
        return `${score} + 5 = ${bonusScore} -> Reguler`;
    }
}

function processScores<T>(scores: number[], callback: (score: number) => T): T[] {
    const results: T[] = [];

    for (const score of scores) {
        const result = callback(score);
        results.push(result);
    }
    return results;
}

const gradeResults = processScores(scores, determineGrade);
const bonusResults = processScores(scores, addBonus);
const passingResults = processScores(scores, checkPassing);

console.log(gradeResults);
console.log(bonusResults);
console.log(passingResults);

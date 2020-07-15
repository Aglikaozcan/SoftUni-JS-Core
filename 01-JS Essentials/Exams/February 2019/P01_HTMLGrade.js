function calculateGrade(examPoints, homeworkCompleted, totalHomework) {

    let maxTotalPoints = 100;
    let maxExamPoints = 400;

    let totalPoints = (examPoints / maxExamPoints) * 90;

    let bonus = homeworkCompleted / totalHomework * 10;

    totalPoints += bonus;

    let grade = 3 + 2 * (totalPoints - maxTotalPoints / 5) / (maxTotalPoints / 2);

    if (examPoints === maxExamPoints) {
        grade = 6;
    }

    if (grade < 3) {
        grade = 2;
    } 
    if (grade > 6) {
        grade = 6;
    }

    console.log(grade.toFixed(2));
}

calculateGrade(50, 1, 5);
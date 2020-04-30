let scores = [
    {
        //Jane
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
];
//local test
console.log(scores);

//#2
const addScore = (array, newName, newScore, newDate) => {

    let newStudent = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,
    }

    array.push(newStudent);
}
//local test
// addScore(scores, "Isaac", 90, "2020-29-04");
// console.log(scores);

//#3
const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
};
//local test
// deleteScoreByIndex(scores, 0);
// console.log(scores);

//#4
const deleteScoreByName = (array, name) => {
    const scoreIndex = array.findIndex((element) => {
        return element.name === name;
    });
    array.splice(scoreIndex, 1);
};
// local test
deleteScoreByName(scores, "Joe");
console.log(scores);

//#5
const editScore = (array, index, score) => {
    let passed = null;
    if (score >= 60) {
        passed = true;
    } else {
        passed = false;
    }
    array[index].score = score; //updates an object in an array
    array[index].passed = passed; //updates an object in an array
};
//local test
editScore(scores, 1, 55);
console.log(scores);

// #6
const findScoreByName = (array, name) => {
    return array.find((scoreElement) => {
        return scoreElement.name === name;
    });
};
console.log(findScoreByName(scores, "Jane"));

// #7
const findLowestScore = (array) => {
    let currentLowestScore = array[0];
    array.forEach(element => {
        if (element.score < currentLowestScore.score) {
            currentLowestScore = element;
        }
    });
    return currentLowestScore;
}
console.log(findLowestScore(scores));

//#8
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let obj of array) {
        currentScores += obj.score;
    }
    return currentScores / array.length;
};
console.log(findAverageQuizScore(scores));

//#9
//comeback to mitch on
const filterScores = (array, value) => {
    return array.filter((obj) => {
        return obj.name === value;
    });
};
console.log(filterScores(scores, "Joe"))

//#10
const sortScoresAsc = (array) => {
    return array.sort((a, b) => {
        return a.score < b.score
    });
}
console.log(sortScoresAsc(scores));

//#11
const sortScoresDsc = (array) => {
    return array.sort((a, b) => {
        return a.score < b.score
    });
}
console.log(sortScoresDsc(scores));
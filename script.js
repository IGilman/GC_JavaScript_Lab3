let scores = [
    {
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
// deleteScoreByName(scores, "Joe");
// console.log(scores);

//#5
//mitch helped 
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
// editScore(scores, 1, 55);
// console.log(scores);

// #6
//mitch helped 
const findScoreByName = (array, name) => {
    return array.find((scoreElement) => {
        return scoreElement.name === name;
    });
};
//local test
// console.log(findScoreByName(scores, "Jane"));

// #7
//mitch helped 
const findLowestScore = (array) => {
    let currentLowestScore = array[0];
    array.forEach(element => {
        if (element.score < currentLowestScore.score) {
            currentLowestScore = element;
        }
    });
    return currentLowestScore;
}
//local test
// console.log(findLowestScore(scores));

//#8
//mitch helped 
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let obj of array) {
        currentScores += obj.score;
    }
    return currentScores / array.length;
};
//local test
// console.log(findAverageQuizScore(scores));

//#9
//mitch helped 
const filterScores = (array, property, value) => {
    return array.filter(obj => {
        return obj[property] === value;
    });
};
//local test
// console.log(filterScores(scores, "name", "Joe"))

//#10
//mitch helped 
const sortScoresAsc = (array) => {
    return array.sort((element1, element2) => {
        return element1.score < element2.score ? 1 : -1
    }); ``
};
//local test
// console.log(sortScoresAsc(scores));

//for some reason, when I console log the Dsc (below) and Asc (above) at the same time 
//both functions restult in descending order 

//#11
//mitch helped 
const sortScoresDsc = (array) => {
    return array.sort((element1, element2) => {
        return element1.score < element2.score ? -1 : 1
    });
};
//local test
// console.log(sortScoresDsc(scores));



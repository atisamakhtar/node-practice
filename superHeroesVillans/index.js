const heroes = require('superheroes');
const readline = require('readline');
const randomNumberRange = require('random-number-range');

const villains = require('supervillains');

const heroName = heroes.random();
const villainName = villains.random();

console.log("Fight is gonna conduct between \nsuperhero : " + heroName + " \n ****** VS ****** \nsuperVillain : " + villainName);

// random number range is the funciton declared above

const heroTurn = (min = 10, max = 50) => {
    
    // randomNumberRange(); => without perimeters => return form 0 to 9 both inclusive

    return randomNumberRange({min: min, max: max});
}

const villainTurn = (min = 10, max = 50) => {
    return randomNumberRange({min: min, max: max});
}

let trueSelected = false;
let prom, heroScore, villainScore;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

do {
    // prom = prompt("Press 1 for heroTurn first otherwise 0");
    prom = 1;

    if (prom == 1) {
        heroScore = heroTurn(10, 50);
        villainScore = villainTurn(10, 50);
        trueSelected = true;
    } else if (prom == 0) {
        villainScore = villainTurn();
        heroScore = heroTurn();
        trueSelected = true;
    } else {
        console.log("Please select from 1 or 0");
    }

    if (trueSelected) {
        console.log("Hero Score : ", heroScore);
        console.log("Villain Score : ", villainScore);

        if (heroScore > villainScore) {
            console.log(`Congratulations! hero (${heroName}) won.}`);
        } else {
            console.log(`Oh shit! Villain (${villainName}) won.`)
        }
    }

} while(!trueSelected);
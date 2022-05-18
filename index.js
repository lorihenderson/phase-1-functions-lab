// Code your solution in this file!

function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264
}

function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination);

    if (fare < 400) {
        return 0;
    } else if (fare >= 400 && fare <= 2000) {
        return ((fare - 400) * .02);
    } else if (fare > 2000 && fare <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
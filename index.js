// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const HqInBlocks = 42;
    return Math.abs(block - HqInBlocks);
}


function distanceFromHqInFeet(block) {
    const hqBlock = 42;
    const distanceInBlocks = Math.abs(block - hqBlock);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}


function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(end - start);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}



function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264; 
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 0.02);
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

   


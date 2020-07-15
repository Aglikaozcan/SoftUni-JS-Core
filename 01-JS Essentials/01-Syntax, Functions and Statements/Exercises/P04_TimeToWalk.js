function timeToWalk(steps, footprintInMeters, speed) {
    let distanceKM = (steps * footprintInMeters) / 1000;
    let restMinutes = parseInt((steps * footprintInMeters) / 500);

    let totalSeconds = distanceKM / speed * 3600 + restMinutes * 60;
    let hoursWalked = parseInt(totalSeconds / 3600);
    totalSeconds -= hoursWalked * 3600;
    let minutesWalked = parseInt(totalSeconds / 60);
    let secondsWalked = (totalSeconds % 60);

    let finalOutput = '';

    if (hoursWalked < 10) {
        finalOutput += `0${hoursWalked}`;
    } else {
        finalOutput += `${hoursWalked}`;
    }

    if (minutesWalked < 10) {
        finalOutput += `:0${minutesWalked.toFixed(0)}:`;
    } else {
        finalOutput += `:${minutesWalked.toFixed(0)}:`;
    }

    if (secondsWalked < 10) {
        finalOutput += `0${secondsWalked.toFixed(0)}`;
    } else {
        finalOutput += `${secondsWalked.toFixed(0)}`;
    }

    console.log(finalOutput);
}

timeToWalk(2564, 0.70, 5.5);
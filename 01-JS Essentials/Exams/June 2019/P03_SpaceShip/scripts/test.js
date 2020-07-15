function isBiggerOrEqual(a, b) {
    if (Object.keys(a).every(val => a[val] >= b[val])) {
        return true;
    } else {
        return false;
    }
}

isBiggerOrEqual({da: 2, ne: 1}, {da: 3, ne: 4});
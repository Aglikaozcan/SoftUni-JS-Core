function subsequence(arr) {

    let sequence = [];
    
    let counter = 1;
    let maxLength = 1;
    let bestIndex = 0;

    for (let i = 0; i < arr.length; i++) {

        if ((arr[i] > 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] > 0)) {
            counter++;
        } else {
            counter = 1;
        }

        if (counter > maxLength) {
            maxLength = counter;
            bestIndex = i + 1;
        }
    }

    let beginIndex = (bestIndex - maxLength) + 1;
    let endIndex = beginIndex + maxLength;

    sequence = arr.slice(beginIndex, endIndex);    

    // console.log(sequence);
    // console.log(beginIndex);
    // console.log(endIndex);

    if (sequence.length <= 1) {
        console.log(`In ${arr.join(', ')} no special sequence is found`);
    } else {
        console.log(`The longest sequence is ${sequence.join(', ')}`);
    }
}

subsequence([1, -2, 1, -1, 2, 1, -1]);
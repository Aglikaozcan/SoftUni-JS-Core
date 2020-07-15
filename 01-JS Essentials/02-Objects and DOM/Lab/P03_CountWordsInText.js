function solve(input) {
    let wordCount = {};
    //let pattern = /\w+/g;
    //let words = input[0].match(pattern);
    let words = input[0].split(/\W+/).filter(x=>x!=="");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if(!wordCount[word]) {
            wordCount[word] = 0;
        }
        wordCount[word]++;
    }
    
    let result = JSON.stringify(wordCount);
    console.log(result);
}

solve (["Far too slow, you're far too slow."]);
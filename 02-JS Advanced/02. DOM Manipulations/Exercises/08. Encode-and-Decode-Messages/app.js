function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    let sendtextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextAre = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', function() {
        let input = sendtextArea.value;
        let encodedMessage = '';

        for (let i = 0; i < input.length; i++) {
            encodedMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }

        decodeTextAre.value = encodedMessage;
        sendtextArea.value = '';
    });

    decodeButton.addEventListener('click', function() {
        let input = decodeTextAre.value;
        let decodedMessage = '';

        for (let i = 0; i< input.length; i++) {
            decodedMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        decodeTextAre.value = decodedMessage;
    });
}
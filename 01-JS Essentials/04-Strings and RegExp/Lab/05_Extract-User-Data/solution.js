function solve() {

    let users = JSON.parse(document.getElementById('arr').value);

    let extractName = (user) => {
        let pattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        let match = user.match(pattern);
        return match && match[0];
    };

    let extractPhoneNumber = (user) => {
        let pattern = /(\+359 \d \d{3} \d{3})|(\+359-\d-\d{3}-\d{3})/;
        let match = user.match(pattern);
        return match && match[0];
    };

    let extractEmail = (user) => {
        let pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let match = user.match(pattern);
        return match && match[0];
    };

    users.forEach(user => {
        let name = extractName(user);
        let phoneNumber = extractPhoneNumber(user);
        let email = extractEmail(user);

        if (!name || !phoneNumber || !email) {
            console.log('Invalid data');
            console.log('- - -');

            return;
        }

        console.log('Name: ' + name);
        console.log('Phone Number: ' + phoneNumber);
        console.log('Email: ' + email);
        console.log('- - -');
    });
}
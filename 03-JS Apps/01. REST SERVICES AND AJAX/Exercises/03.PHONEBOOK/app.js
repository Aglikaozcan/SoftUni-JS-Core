function attachEvents() {
    document.getElementById('btnLoad')
        .addEventListener('click', function () {

            let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
            let currentContact = '';

            fetch(url)
                .then(info => info.json())
                .then(data => loadPhonebook(data));
        });

    function loadPhonebook(data) {

        let contacts = Object.values(data);
        console.log(contacts);

        for (let contact of contacts) {
            let person = contact.person;
            let phone = contact.phone;

            let li = document.createElement('li');
            li.textContent = `${person}: ${phone}`;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            document.getElementById('phonebook').appendChild(li);

            deleteBtn.addEventListener('click', function () {
                li.remove();
            });
        }
    }
}

attachEvents();
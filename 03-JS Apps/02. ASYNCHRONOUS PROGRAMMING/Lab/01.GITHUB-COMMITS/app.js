function loadCommits() {
    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let listElement = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.err);
            }

            return response.json();
        })
        .then(data => {
            listElement.innerHTML = '';

            let messages = data.map((item) => item.commit.message);

            for (const key in messages) {
                if (messages.hasOwnProperty(key)) {
                    const message = messages[key];

                    let li = document.createElement('li');
                    li.textContent = message;
                    listElement.appendChild(li);
                }
            }
            console.log(messages);
        })
        .catch(err => {
            // listElement.innerHTML = '';

            // let li = document.createElement('li');
            // li.textContent = "Custom error";
            // listElement.appendChild(li);

            console.log('Custom error', err);
        });
}
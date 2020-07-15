function attachEvents() {
    const elements = {
        loadBtn: document.querySelector('button.load'),
        addBtn: document.querySelector('button.add'),
        catches: document.getElementById('catches')
    };

    elements.catches.children[0].style.display = 'none';

    elements.loadBtn.addEventListener('click', loadAllCatches);
    elements.addBtn.addEventListener('click', createCatch);

    function loadAllCatches() {
        let url = `https://fisher-game.firebaseio.com/catches.json`;

        fetch(url, { method: 'GET' })
            .then(handler)
            .then(showAllCatches);

        function showAllCatches(data) {
            //console.log(data);

            Object.keys(data).forEach((key) => {
                //console.log(data[key]);

                let catchElement = elements.catches.children[0].cloneNode(true);
                catchElement.style.display = 'inline-block';

                catchElement.setAttribute('data-id', key);
                catchElement.querySelector('input.angler').value = data[key].angler;
                catchElement.querySelector('input.weight').value = data[key].weight;
                catchElement.querySelector('input.species').value = data[key].species;
                catchElement.querySelector('input.location').value = data[key].location;
                catchElement.querySelector('input.bait').value = data[key].bait;
                catchElement.querySelector('input.captureTime').value = data[key].captureTime;
                catchElement.querySelector('button.update').addEventListener('click', updateCatch);
                catchElement.querySelector('button.delete').addEventListener('click', deleteCatch);
                elements.catches.appendChild(catchElement);

                function updateCatch(event) {
                    //console.log(event.currentTarget);
                    let catchId = event.currentTarget.parentNode.getAttribute('data-id');
                    // console.log(catchId);
                    let catchElement = event.currentTarget.parentNode;

                    let data = Array.from(catchElement.children)
                        .filter((element) => element.tagName === 'INPUT')
                        .reduce((acc, curr) => {
                            //console.log(curr.value);

                            let prop = curr.className;
                            acc[prop] = curr.value;

                            return acc;
                        }, {});

                    //console.log(data);

                    let headers = {
                        method: 'PUT',
                        body: JSON.stringify(data)
                    };

                    fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, headers)
                        .then(handler)
                        .then((data) => {
                            console.log(data);
                            elements.loadBtn.click();
                        });
                }

                function deleteCatch(event) {
                    //console.log(event.currentTarget);

                    let catchId = event.currentTarget.parentNode.getAttribute('data-id');
                    //console.log(catchId);
                    let catchElement = event.currentTarget.parentNode;

                    let headers = {
                        method: 'DELETE'
                    };

                    fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, headers)
                        .then(handler)
                        .then((data) => {
                            console.log(data);
                            catchElement.remove();
                        });
                }
            });
        }
    }

    function createCatch() {
        let catchElement = document.getElementById('addForm');

        let data = Array.from(catchElement.children)
        .filter((element) => element.tagName === 'INPUT')
        .reduce((acc, curr) => {
            //console.log(curr.value);

            let prop = curr.className;
            acc[prop] = curr.value;

            return acc;
        }, {});
 
        //console.log(data);

        let headers = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch('https://fisher-game.firebaseio.com/catches.json', headers)
        .then(handler)
        .then((data) => {
            elements.loadBtn.click();
        });
    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        return response.json();
    }
}

attachEvents();
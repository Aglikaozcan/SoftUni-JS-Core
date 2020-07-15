function solve() {

    let baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId = 'depot';
    let currentStopInfo = '';

    function depart() {
        let url = baseUrl + currentStopId + '.json';

        fetch(url)
        .then(info => info.json())
        .then(data => loadStop(data));

        document.getElementById('depart').setAttribute('disabled', true);
        document.getElementById('arrive').disabled = false;
    }

    function arrive() {
        document.querySelector('span.info').textContent = `Arriving at ${currentStopInfo.name}`;
        currentStopId = currentStopInfo.next;
        document.getElementById('arrive').disabled = true;
        document.getElementById('depart').disabled = false;   
    }

    function loadStop(data) {
        //console.log(data);
        currentStopInfo = data;
        document.querySelector('span.info').textContent = `Nest stop ${currentStopInfo.name}`;
        currentStopId = currentStopInfo.name;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
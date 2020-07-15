function attachEvents() {
    const elements = {
        inputField: document.getElementById('location'),
        button: document.getElementById('submit'),
        current: document.getElementById('current'),
        upcoming: document.getElementById('upcoming'),
        forecast: document.getElementById('forecast')
    };

    const symbols = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    };

    elements.button.addEventListener('click', loadWeatherInfo);

    function loadWeatherInfo() {
        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(handler)
            .then(loadLocationWeatherInfo);
    }

    function loadLocationWeatherInfo(data) {
        //console.log(data);

        let location = data.filter((o) => o.name === elements.inputField.value)[0];

        //console.log(location);

        fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
            .then(handler)
            .then(showCurrentConditions);
    }

    function showCurrentConditions(data) {
        console.log(data);

        elements.forecast.style.display = 'block';        

        let divForecast = createHtmlElement('div', 'forecasts');

        divForecast.innerHTML = '';

        let symbol = symbols[data.forecast.condition.toLowerCase()];
        let spanSymbol = createHtmlElement('span', ['condition', 'symbol'], symbol);

        let spanHolder = createHtmlElement('span', 'condition');

        let spanName = createHtmlElement('span', 'forecast-data', data.name);

        let degree = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
        let spanDegrees = createHtmlElement('span', 'forecast-data', degree);

        let spanCondition = createHtmlElement('span', 'forecast-data', data.forecast.condition);

        spanHolder = appendChildrenToParent([spanName, spanDegrees, spanCondition], spanHolder);
        divForecast = appendChildrenToParent([spanSymbol, spanHolder], divForecast);

        elements.current.appendChild(divForecast);
    }

    function createHtmlElement(tagName, className, textContent) {
        let currentElement = document.createElement(tagName);

        if (typeof className === 'string') {
            currentElement.classList.add(className);
        } else if (typeof className === 'object') {
            currentElement.classList.add(...className);
        }

        if (textContent) {
            currentElement.textContent = textContent;
        }

        return currentElement;
    }

    function appendChildrenToParent(children, parent) {
        children.forEach((child) => parent.appendChild(child));

        return parent;
    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.json();
    }
}

attachEvents();
const eventModel = function () {

    const createEvent = function (params) {
        //console.log(params);

        let data = {
            ...params,
            peopleInterestedIn: 0,
            organizer: JSON.parse(storage.getData('userInfo')).username
        };

        //console.log(data);

        let url = `/appdata/${storage.appKey}/events`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);
    };

    const getAllEvents = function () {

        let url = `/appdata/${storage.appKey}/events`;

        let headers = {
            headers: {}
        };

        return requester.get(url, headers);
    };

    const getEvent = function (id) {

        //console.log(id);

        let url = `/appdata/${storage.appKey}/events/${id}`;

        let headers = {
            headers: {}
        };

        return requester.get(url, headers);
    };

    const editEvent = function (params) {
        //console.log(params);

        let url = `/appdata/${storage.appKey}/events/${params.eventId}`;

        delete params.eventId;

        let headers = {
            body: JSON.stringify({...params}),
            headers: {}
        };

        return requester.put(url, headers);
    };

    const deleteEvent = function (id) {

        let url = `/appdata/${storage.appKey}/events/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    };

    return {
        createEvent,
        getAllEvents,
        getEvent,
        editEvent,
        deleteEvent
    };
}();
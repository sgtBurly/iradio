const fetch = require('node-fetch');

const getAllChannels = async () => {

        let response = await fetch(
            `http://api.sr.se/api/v2/channels?format=json`
        );

        let channels = await response.json();

        return channels;

};

module.exports = getAllChannels
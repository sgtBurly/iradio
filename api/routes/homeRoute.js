const getAllChannels = require("../controllers/channelController");
const express = require("express");

const useHome = (app) => {

    app.get('/', async (req, res) => {

        console.log("In get method");

        const channels = await getAllChannels();

        res.json(channels);
        
    });

};

module.exports = useHome
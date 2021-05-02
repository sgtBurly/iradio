const getAllChannels = require("../controllers/userController");
const express = require("express");

const userRoutes = (app) => {

    app.get('/login', async (req, res) => {

        const channels = await login(req.body);
        
    });

};

module.exports = userRoutes
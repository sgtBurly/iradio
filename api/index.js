const express = require("express");
const path = require("path");
const session = require("express-session");
const useHome = require("./routes/homeRoute");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

const DB = require("./database/DB.js");
const login = require("./controllers/userController");
const db = new DB();

useHome(app);
userRoutes(app);

const port = 3001;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.static(path.join(__dirname, "../build")));

app.use(
    session({
        secret: "Tandem musca cacavit",
        resave: false,
        savUninitialized: true,
        cookie: { secure: "auto" }
    })
);

module.exports = app;
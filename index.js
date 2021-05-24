import express from "express";
import mongoose from "mongoose";

import humanRouter from "./routers/humans.js";

const url = "mongodb://localhost/crud-example-arts";

const app = express();

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on("open", () => {
    console.log("Connected...");
});

app.use(express.json());

app.use(function (req, res, next) {
    // * denotes all domains. Can specify a particular domain too instead *
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// const humanRouter = require('./routers/humans');
app.use("/humans", humanRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on port " + PORT));

import express from "express";
import mongoose from "mongoose";
import humanRouter from './routers/humans.js';

const url = "mongodb://localhost/crud-example-arts";

const app = express();

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('open', () => {
    console.log("Connected...");
})

app.use(express.json())

// const humanRouter = require('./routers/humans');
app.use('/humans', humanRouter)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on port " + PORT));
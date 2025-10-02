import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

//database connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to the database")
    }).catch(() => {
        console.log("Database Connection Fail")
    })

app.listen(5000, () => {
        console.log("Server is Running on port 5000")
    })
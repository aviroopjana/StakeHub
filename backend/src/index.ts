import express, { Express, Response, Request } from "express";
import Moralis from "moralis";
import dotenv from "dotenv";
import cors from "cors";
const app: Express = express();
const port = 5001;
dotenv.config();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.MORALIS_API_KEY; 

// startServer function to initialise Moralis

const startServer = async () => {
    await Moralis.start({
        apiKey: API_KEY,
    }).then(() => {
        app.listen(port, () => {
            console.log("Moralis Server started successfully!")
        });
    });
};

startServer();
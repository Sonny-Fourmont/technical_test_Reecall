const express = require("express");
import {Express} from "express";
const app: Express = express();

const HOST: string = "localhost";
const PORT: number = 3000

// features
const compagnies = require("./routes/compagnies");
// const contacts = require("./routes/contacts");
// const tickets = require("./routes/tickets");
// const transactions = require("./routes/transactions");

// Middleware
app.use(express.json('/compagnies', compagnies));
// , contacts, tickets, transactions

// routes
app.get('/', (req: any, res: any) => {
    res.send("tst");
});

// listener
console.log("\n------------------\n  API IS READY !\n------------------\n")
app.listen(PORT, () => {
    console.log (`listening at http://${HOST}:${PORT}`);
});
const express = require("express");
import {Express} from "express";
const app: Express = express();

const HOST: string = "localhost";
const PORT: number = 3000

// features
import compagnies from "./routes/compagnies";
import contacts from "./routes/contacts";
import tickets from "./routes/tickets";
import transactions from "./routes/transactions";

// Middleware
app.use('/', compagnies, contacts, tickets, transactions);

// routes
app.get('/', (req: any, res: any) => {
    res.send("test");
});

// listener
console.log("\n------------------\n  API IS READY !\n------------------\n")
app.listen(PORT, () => {
    console.log (`listening at http://${HOST}:${PORT}`);
});
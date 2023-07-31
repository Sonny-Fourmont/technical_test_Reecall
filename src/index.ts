import express, {Express, Request, Response} from "express";
const app: Express = express();

const HOST: string = "localhost";
const PORT: number = 3000

// features
import companies from "./routes/companies";
import contacts from "./routes/contacts";
import tickets from "./routes/tickets";
import transactions from "./routes/transactions";

// Middleware
app.use('/', companies, contacts, tickets, transactions);

// routes
app.get('/', (req: Request, res: Response) => {
    res.send("To use this API you need to use different routes, the name of the route are explicits:\n\
localhost:3000/ ; \n\
localhost:3000/(companies/contacts/tickets/transactions) ; \n\
localhost:3000/(companies/contacts/tickets/transactions)/<ID> ; \n\
localhost:3000/(companies/contacts/tickets/transactions)/create ; \n\
localhost:3000/(companies/contacts/tickets/transactions)/delete ; \n\
localhost:3000/(companies/contacts/tickets/transactions)/update");
});

// listener
console.log("\n------------------  API IS READY !  ------------------\n")
app.listen(PORT, () => {
    console.log (`listening at http://${HOST}:${PORT}`);
});
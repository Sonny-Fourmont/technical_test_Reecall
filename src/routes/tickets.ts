import express, {Router, Request, Response} from "express";
import { ApiTickets, ApiTicketsID } from "../api/api";
const router: Router = express.Router();

router.get('/tickets', (req: Request, res: Response) => {
    // res.send('tickets test');
    async function GetThemAll() {
        const TicketApi = new ApiTickets();
        try {
            const result = await TicketApi.GetTickets();
            console.log("Tickets list's Status: 200 OK")
            res.json(result);
        } catch (error) {
            console.error('Error 404: Tickets not found');
            res.send('Error 404: Tickets not found');
        }
    }
    GetThemAll();
});
router.get(`/tickets/:id`, (req: Request, res: Response) => {
    // res.send(`id test: ${req.params.id}`);
    async function GetThemID() {
        const TicketID = new ApiTicketsID();
        try {
            const result = await TicketID.GetTicketsID(req.params.id);
            console.log("Ticket ID's Status: 200 OK")
            res.json(result);
        } catch (error) {
            console.error('Error 404: Ticket not found. Tickets Id are usually numeric.');
            res.send('Error 404: Ticket not found. Tickets Id are usually numeric.');
        }
    }
    GetThemID();
});
router.post('/tickets/create', (req: Request, res: Response) => {
    res.send("create test");
});
router.put('/tickets/update', (req: Request, res: Response) => {
    res.send("update test");
});
router.delete('/tickets/delete', (req: Request, res: Response) => {
    res.send("delete test");
});

console.log('tickets done !');

export default router;

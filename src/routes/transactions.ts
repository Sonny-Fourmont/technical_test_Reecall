import express, {Router, Request, Response} from "express";
import { ApiTransactions, ApiTransactionsID } from "../api/api";
const router: Router = express.Router();

router.get('/transactions', (req: Request, res: Response) => {
    // res.send('transactions test');
    async function GetThemAll() {
        const DealsApi = new ApiTransactions();
        try {
            const result = await DealsApi.GetDeals();
            console.log("Transactions list's Status: 200 OK")
            res.json(result);
        } catch (error) {
            console.error('Error 404: Transactions not found');
            res.send('Error 404: Transactions not found');
        }
    }
    GetThemAll();
});
router.get(`/transactions/:id`, (req: Request, res: Response) => {
    // res.send(`id test: ${req.params.id}`);
    async function GetThemID() {
        const DealsID = new ApiTransactionsID();
        try {
            const result = await DealsID.GetDealsID(req.params.id);
            console.log("Transaction ID's Status: 200 OK")
            res.json(result);
        } catch (error) {
            console.error('Error 404: Transaction not found. Transactions Id are usually numeric.');
            res.send('Error 404: Transaction not found. Transactions Id are usually numeric.');
        }
    }
    GetThemID();
});
router.post('/transactions/create', (req: Request, res: Response) => {
    res.send("create test");
});
router.put('/transactions/update', (req: Request, res: Response) => {
    res.send("update test");
});
router.delete('/transactions/delete', (req: Request, res: Response) => {
    res.send("delete test");
});

console.log('transactions done !');

export default router;

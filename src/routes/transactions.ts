import express, {Router, Request, Response} from "express";
const router: Router = express.Router();

router.get('/transactions', (req: Request, res: Response) => {
    res.send('transactions test');
});
router.get(`/transactions/:id`, (req: Request, res: Response) => {
    res.send(`id test: ${req.params.id}`);
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

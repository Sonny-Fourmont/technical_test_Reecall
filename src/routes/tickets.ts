import express, {Router, Request, Response} from "express";
const router: Router = express.Router();

router.get('/tickets', (req: Request, res: Response) => {
    res.send('tickets test');
});
router.get(`/tickets/:id`, (req: Request, res: Response) => {
    res.send(`id test: ${req.params.id}`);
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

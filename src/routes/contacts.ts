import express, {Router, Request, Response} from "express";
const router: Router = express.Router();

router.get('/contacts', (req: Request, res: Response) => {
    res.send('contacts test');
});
router.get(`/contacts/:id`, (req: Request, res: Response) => {
    res.send(`id test: ${req.params.id}`);
});
router.post('/contacts/create', (req: Request, res: Response) => {
    res.send("create test");
});
router.put('/contacts/update', (req: Request, res: Response) => {
    res.send("update test");
});
router.delete('/contacts/delete', (req: Request, res: Response) => {
    res.send("delete test");
});

console.log('contacts done !');

export default router;

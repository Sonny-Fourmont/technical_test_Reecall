import express, {Router, Request, Response} from "express";
import {ApiCompagnies} from "../api/api";
const router: Router = express.Router();

router.get('/compagnies', (req: Request, res: Response) => {
    async function GetThemAll() {
        const CompApi = new ApiCompagnies();
        try {
            const result = await CompApi.GetCompagnies();
            res.json(result);
        } catch (error) {
            console.error('Error');
        }
    }
    GetThemAll();
});
router.get(`/compagnies/:id`, (req: Request, res: Response) => {
    res.send(`id test: ${req.params.id}`);
});
router.post('/compagnies/create', (req: Request, res: Response) => {
    res.send("create test");
});
router.put('/compagnies/update', (req: Request, res: Response) => {
    res.send("update test");
});
router.delete('/compagnies/delete', (req: Request, res: Response) => {
    res.send("delete test");
});

console.log('compagnies done !');

export default router;

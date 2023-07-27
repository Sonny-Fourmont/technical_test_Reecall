const express = require("express");
import {Router, Request, Response} from "express";
const router: Router = express.Router();

router.get('/compagnies', (req: Request, res: Response) => {
    res.send('compagnies test');
});
router.get(`/compagnies/:id`, (req: Request, res: Response) => {
    res.send(`${req.params.id}`);
    res.send("id test");
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

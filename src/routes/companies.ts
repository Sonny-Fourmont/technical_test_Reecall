import express, {Router, Request, Response} from "express";
import {ApiCompanies, ApiCompaniesID} from "../api/api";
const router: Router = express.Router();

router.get('/companies', (req: Request, res: Response) => {
    async function GetThemAll() {
        const CompApi = new ApiCompanies();
        try {
            const result = await CompApi.GetCompanies();
            res.json(result);
            console.log("Companies list's Status: 200 OK")
        } catch (error) {
            console.error('Error 404: Companies not found');
            res.send('Error 404: Companies not found');
        }
    }
    GetThemAll();
});
router.get(`/companies/:id`, (req: Request, res: Response) => {
    // res.send(`id test: ${req.params.id}`);
    async function GetThemID() {
        const CompID = new ApiCompaniesID();
        try {
            const result = await CompID.GetCompanieID(req.params.id);
            res.json(result);
            console.log("Companie ID's Status: 200 OK")
        } catch (error) {
            console.error('Error 404: Companie not found. Companies Id are usually numeric.');
            res.send('Error 404: Companie not found. Companies Id are usually numeric.');
        }
    }
    GetThemID();
});
router.post('/companies/create', (req: Request, res: Response) => {
    res.send("create test");
});
router.put('/companies/update', (req: Request, res: Response) => {
    res.send("update test");
});
router.delete('/companies/delete', (req: Request, res: Response) => {
    res.send("delete test");
});

console.log('companies done !');

export default router;

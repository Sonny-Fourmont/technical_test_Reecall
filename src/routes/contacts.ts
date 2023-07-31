import express, {Router, Request, Response} from "express";
import { ApiContacts, ApiContactsID } from "../api/api";
const router: Router = express.Router();

router.get('/contacts', (req: Request, res: Response) => {
    async function GetThemAll() {
        const ContactAPI = new ApiContacts();
        try {
            const result = await ContactAPI.GetContacts();
            console.log("Contacts list's Status: 200 OK")
            res.json(result);
        } catch (error) {
            console.error('Error 404: Contacts not found');
            res.send('Error 404: Contacts not found');
        }
    }
    GetThemAll();
});
router.get(`/contacts/:id`, (req: Request, res: Response) => {
    // res.send(`id test: ${req.params.id}`);
    async function GetThemID() {
        const ContactID = new ApiContactsID();
        try {
            const result = await ContactID.GetContactsID(req.params.id);
            console.log("Contact ID's Status: 200 OK")
            res.json(result);
        } catch (error) {
            console.error('Error 404: Contact not found. Contacts Id are usually numeric.');
            res.send('Error 404: Contact not found. Contacts Id are usually numeric.');
        }
    }
    GetThemID();
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

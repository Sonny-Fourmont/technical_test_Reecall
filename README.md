# Technical test Reecall
# On linux or MacOS only
## Tasks
Applicants must develop a service that connects to the API HubSpot using
the provided API key that exposes endpoints to interact with the following features. Each of these features corresponds to a endpoint of your service.
## Installation
1- Clone the repository:
```bash
git clone https://github.com/Sonny-Fourmont/technical_test_Reecall.git
```
2- install npm if you don't have it:
- Linux:
```bash
sudo <your package manager> npm
```
- MacOS:
```bash
brew install npm
```
3- Install the dependencies with npm:
```bash
npm install
```
4- Compile the TS code:
```bash
npx tsc
```
## Use the app
1- Start the server:
```bash
node ./js/index.js
```
2- Get the result:

Use a simple browser like: Firefox, Chrome... With this URL:
```
localhost:3000/<any routes>
```
or use Postman or ThunderClient on VsCode with the same URL.

---

Your result will appear as a JSON file

Here are some patterns:
do the same with: companies, contacts, tickets, transactions.
```bash
localhost:3000/
localhost:3000/companies || localhost:3000/companies/<ID>
localhost:3000/companies/create || localhost:3000/companies/delete || localhost:3000/companies/update
```
## Technologies Used
- TypeScript
- JavaScrpit
- Hubspot-api-client
- Node.JS
- Express (TS & JS)
## Credits
Developed by Sonny FOURMONT.
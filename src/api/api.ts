import {Client} from '@hubspot/api-client';
const hubspotClient = new Client({accessToken: "pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c"});

// Companies's API
export class ApiCompanies {
  async GetCompanies(): Promise<any> {
    try {
      const response = await hubspotClient.crm.companies.getAll();
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching companies list:', error);
      throw new Error('Failed to fetch companies list.');
    }
  }
}
export class ApiCompaniesID {
  async GetCompanieID(id: string): Promise<any> {
    try {
      const response = await hubspotClient.crm.companies.basicApi.getById(id);
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching companie with ID:', error);
      throw new Error('Failed to fetch companie with ID.');
    }
  }
}

// Contacts's API
export class ApiContacts {
  async GetContacts(): Promise<any> {
    try {
      const response = await hubspotClient.crm.contacts.getAll();
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching contacts list:', error);
      throw new Error('Failed to fetch contacts list.');
    }
  }
}
export class ApiContactsID {
  async GetContactsID(id: string): Promise<any> {
    try {
      const response = await hubspotClient.crm.contacts.basicApi.getById(id);
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching contact with ID:', error);
      throw new Error('Failed to fetch contact with ID.');
    }
  }
}

// tickets's API
export class ApiTickets {
  async GetTickets(): Promise<any> {
    try {
      const response = await hubspotClient.crm.tickets.getAll();
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching tickets list:', error);
      throw new Error('Failed to fetch tickets list.');
    }
  }
}
export class ApiTicketsID {
  async GetTicketsID(id: string): Promise<any> {
    try {
      const response = await hubspotClient.crm.tickets.basicApi.getById(id);
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching ticket with ID:', error);
      throw new Error('Failed to fetch ticket with ID.');
    }
  }
}

// transactions's API
export class ApiTransactions {
  async GetDeals(): Promise<any> {
    try {
      const response = await hubspotClient.crm.deals.getAll();
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching transactions list:', error);
      throw new Error('Failed to fetch transactions list.');
    }
  }
}
export class ApiTransactionsID {
  async GetDealsID(id: string): Promise<any> {
    try {
      const response = await hubspotClient.crm.deals.basicApi.getById(id);
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching transactions with ID:', error);
      throw new Error('Failed to fetch transactions with ID.');
    }
  }
}

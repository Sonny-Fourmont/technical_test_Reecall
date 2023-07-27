import {Client} from '@hubspot/api-client';
const hubspotClient = new Client({accessToken: "pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c"});

export class ApiCompagnies {
  async GetCompagnies(): Promise<any> {
    try {
      const response = await hubspotClient.crm.companies.getAll();
      const result = await response;
      return result;
    } catch (error) {
      console.error('Error while fetching user repositories:', error);
      throw new Error('Failed to fetch user repositories.');
    }
  }
}
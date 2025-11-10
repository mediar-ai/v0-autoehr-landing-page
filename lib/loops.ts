interface LoopsContact {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
  userGroup?: string;
  customAttributes?: Record<string, any>;
}

export class LoopsClient {
  private apiKey: string;
  private baseUrl = 'https://app.loops.so/api/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createContact(contact: LoopsContact) {
    const response = await fetch(`${this.baseUrl}/contacts/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      throw new Error('Failed to create contact in Loops');
    }

    return response.json();
  }

  async sendTransactionalEmail(
    transactionalId: string,
    email: string,
    dataVariables?: Record<string, any>
  ) {
    const response = await fetch(`${this.baseUrl}/transactional`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId,
        email,
        dataVariables,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send transactional email');
    }

    return response.json();
  }

  async addToMailingList(email: string, mailingListId: string) {
    const response = await fetch(`${this.baseUrl}/lists/${mailingListId}/subscribe`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to add to mailing list');
    }

    return response.json();
  }
}

export const loopsClient = new LoopsClient(process.env.LOOPS_API_KEY!);
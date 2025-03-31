import { headers } from 'next/headers';

class RulesApiServer {
  constructor() {
    this.serverUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  }

  getServerUrl() {
    const host = headers().get('host');
    const protocol = host.includes('localhost') ? 'http' : 'https';
    return `${protocol}://${host}`;
  }

  async fetchJson(url, options = {}) {
    const response = await fetch(url, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.statusText}`);
    }

    return response.json();
  }

  async getTitlesOfSections() {
    return this.fetchJson(`${this.serverUrl}/api/rules/sections-titles`);
  }

  async getSection(sectionSlag) {
    return this.fetchJson(`${this.serverUrl}/api/rules/${sectionSlag}`);
  }
}

export const rulesApiServer = new RulesApiServer();

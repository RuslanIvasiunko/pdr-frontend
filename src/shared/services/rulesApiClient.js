class RulesApiClient {
  constructor() {
    this.serverUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  }

  async fetchJson(url, options = {}) {
    const response = await fetch(url, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.statusText}`);
    }

    return response.json();
  }

  async getModalPointOfRules(sectionSlag, number) {
    return this.fetchJson(
      `${this.serverUrl}/api/rules/${sectionSlag}/${number}`,
    );
  }
}

export const rulesApiClient = new RulesApiClient();

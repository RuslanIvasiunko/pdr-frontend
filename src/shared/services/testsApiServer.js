import { headers } from 'next/headers';

class TestsApiServer {
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

  async getTypesOfTests() {
    return this.fetchJson(`${this.serverUrl}/api/tests/types-of-tests`);
  }

  async getTitlesOfSectionsTests() {
    return this.fetchJson(
      `${this.serverUrl}/api/tests/sections/sections-titles`,
    );
  }

  async getSectionDefaultTests(sectionSlag) {
    return this.fetchJson(
      `${this.serverUrl}/api/tests/sections/${sectionSlag}`,
    );
  }

  async getSectionRandomTests(sectionSlag) {
    return this.fetchJson(
      `${this.serverUrl}/api/tests/sections/${sectionSlag}/random?nocache=${Date.now()}`,
    );
  }
}

export const testsApiServer = new TestsApiServer();

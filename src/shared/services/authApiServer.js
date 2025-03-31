// import { headers } from 'next/headers';

// class AuthApi {
//   constructor() {
//     this.serverUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
//   }

//   getServerUrl() {
//     const host = headers().get('host');
//     const protocol = host.includes('localhost') ? 'http' : 'https';
//     return `${protocol}://${host}`;
//   }

//   async fetchJson(url, options = {}) {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Ошибка запроса: ${response.statusText}`);
//     }
//     return response.json();
//   }

//   async login(email, password) {
//     return this.fetchJson(`${this.serverUrl}/api/auth/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//   }

//   async checkToken(token) {
//     return this.fetchJson(`${this.serverUrl}/api/auth/check`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }
// }

// export const authApi = new AuthApi();

// Теперь можно использовать:
// const response = await authApi.login('test@mail.com', 'password123');
// console.log(response);
// или:
// const isValid = await authApi.checkToken('some-jwt-token');
// console.log(isValid);

export class VacancyService {
  static async getAllVacancies() {
    const response = await fetch(
      "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies",
      {
        headers: {
          Authorization:
            "Bearer v3.r.137440105.a6e83d75a6bdb53bc98663eda997ffc473d51648.f011bb4e37c03797cf5beeb7d46b39fa9ce68001",
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
      }
    );
    const data = await response.json();
    return data;
  }

  static async getVacancyById(id) {
    const response = await fetch(
      `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/${id}`,
      {
        headers: {
          Authorization:
            "Bearer v3.r.137440105.a6e83d75a6bdb53bc98663eda997ffc473d51648.f011bb4e37c03797cf5beeb7d46b39fa9ce68001",
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
      }
    );
    const data = await response.json();
    return data;
  }
}

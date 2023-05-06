export class VacancyService {
  static async getAccessKey(signal) {
    const accessJson = {
      login: "sergei.stralenia@gmail.com",
      password: "paralect123",
      client_id: 2356,
      client_secret:
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      hr: 0,
    };

    const response = await fetch(
      `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        },
        body: JSON.stringify(accessJson),
        signal,
      }
    );
    const data = await response.json();
    const token = data["access_token"];
    return token;
  }

  static async getAllVacancies(searchParams, signal, token) {
    if (searchParams.has("page")) {
      const page = Number(searchParams.get("page"));
      const sentPage = Math.floor(Math.abs(page / 5 - 0.1));
      searchParams.set("page", sentPage);
    }
    const searchParamsString = searchParams.toString();

    const response = await fetch(
      `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies${
        searchParamsString.length !== 0 ? "?" + searchParamsString : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
        signal,
      }
    );
    const data = await response.json();
    return data;
  }

  static async getVacancyById(id, signal, token) {
    const response = await fetch(
      `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
        signal,
      }
    );
    const data = await response.json();
    return data;
  }

  static async getAllCatalogues(signal, token) {
    const response = await fetch(
      "https://startup-summer-2023-proxy.onrender.com/2.0/catalogues",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
        signal,
      }
    );
    const data = await response.json();
    return data;
  }
}

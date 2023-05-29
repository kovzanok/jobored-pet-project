export class VacancyService {
  static async getAccessKey(signal) {
    const accessJson = {
      login: "joboredpet@gmail.com",
      password: "joboredPet123",
      client_id: 2513,
      client_secret:
        "v3.r.137577793.0731bafc737fb8f727ca8df14c4edef0041169e4.c34556061613fe2d49623010bd03944988aa5695",
      hr: 0,
    };
    
    const response = await fetch(
      `		https://api.superjob.ru/2.0/oauth2/password/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      `https://api.superjob.ru/2.0/vacancies/${
        searchParamsString.length !== 0 ? "?" + searchParamsString : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Api-App-Id":
            "v3.r.137577793.0731bafc737fb8f727ca8df14c4edef0041169e4.c34556061613fe2d49623010bd03944988aa5695",
        },
        signal,
      }
    );
    const data = await response.json();
    return data;
  }

  static async getVacancyById(id, signal, token) {
    const response = await fetch(
      `https://api.superjob.ru/2.0/vacancies/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Api-App-Id":
            "v3.r.137577793.0731bafc737fb8f727ca8df14c4edef0041169e4.c34556061613fe2d49623010bd03944988aa5695",
        },
        signal,
      }
    );
    const data = await response.json();
    return data;
  }

  static async getAllCatalogues(signal, token) {
    const response = await fetch(
      "https://api.superjob.ru/2.0/catalogues",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Api-App-Id":
            "v3.r.137577793.0731bafc737fb8f727ca8df14c4edef0041169e4.c34556061613fe2d49623010bd03944988aa5695",
        },
        signal,
      }
    );
    const data = await response.json();
    return data;
  }
}

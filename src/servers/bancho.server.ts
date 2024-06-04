import { OsuServer } from "./osu.server";

export class ServerBancho extends OsuServer {
  constructor() {
    super(
      "bancho",
      //@ts-ignore
      process.env.BANCHO_CLIENT,
      //@ts-ignore
      process.env.BANCHO_API_KEY,
      "https://osu.ppy.sh/api/v2",
    );
  }

  async fetchTopScores(userId: string): Promise<{}[]> {
    // Get Client Grants
    const url = new URL("https://osu.ppy.sh/oauth/token");

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "",
    };

    let body = `client_id=${this.clientId}&client_secret=${this.apiKey}&grant_type=client_credentials&scope=public`;

    let response = await fetch(url, {
      method: "POST",
      headers,
      body: body,
    }).then((response) => response.json());

    headers.Authorization = `Bearer ${response.access_token}`;

    response = await fetch(
      this.serverUrl + `/users/${userId}/scores/best?limit=100`,
      {
        method: "GET",
        headers,
      },
    ).then((response) => response.json());

    return response.map((score) => score.pp);
  }
}

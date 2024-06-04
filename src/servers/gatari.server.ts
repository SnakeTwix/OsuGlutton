import { OsuServer } from "./osu.server";

export class ServerGatari extends OsuServer {
  constructor() {
    super("gatari", "", "", "https://api.gatari.pw");
  }

  async fetchTopScores(userId: string): Promise<{}[]> {
    let response = await fetch(
      this.serverUrl + `/user/scores/best?id=${userId}&l=100&p=1&mode=0`,
      {
        method: "GET",
      },
    ).then((response) => response.json());

    return response.scores.map((score) => score.pp);
  }
}

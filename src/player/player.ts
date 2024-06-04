import { IPlayerConfig } from "./playerConfig";

export class Player {
  // At least should have bancho
  // TODO: Implement a check for bancho id
  constructor(
    public displayName: string,
    public playerServers: IPlayerConfig[],
  ) {}

  async fetchAllScores() {
    const allScores: {}[] = [];

    for (let playerServer of this.playerServers) {
      const serverScores = await playerServer.server.fetchTopScores(
        playerServer.playerId,
      );

      allScores.push(...serverScores);
    }

    return allScores.sort(
      (scoreA, scoreB) => (scoreB as number) - (scoreA as number),
    );
  }
}

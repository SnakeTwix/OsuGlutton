import { IOsuServer, OsuServer } from "../servers/osu.server";

export interface IPlayerConfig {
  playerId: string;
  server: IOsuServer;

  fetchScores(): Promise<{}[]>;
}

export class PlayerConfig implements IPlayerConfig {
  constructor(
    public playerId: string,
    public server: OsuServer,
  ) {}

  fetchScores(): Promise<{}[]> {
    return this.server.fetchTopScores(this.playerId);
  }
}

export interface IOsuServer {
  serverName: string;
  fetchTopScores(userId: string): Promise<{}[]>;
}

export abstract class OsuServer implements IOsuServer {
  protected constructor(
    public serverName: string,
    protected clientId: string,
    protected apiKey: string,
    protected serverUrl: string,
  ) {}

  abstract fetchTopScores(userId: string): Promise<{}[]>;
}

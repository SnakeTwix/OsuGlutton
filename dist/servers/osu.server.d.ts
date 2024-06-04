export interface IOsuServer {
    serverName: string;
    fetchTopScores(userId: string): Promise<{}[]>;
}
export declare abstract class OsuServer implements IOsuServer {
    serverName: string;
    protected clientId: string;
    protected apiKey: string;
    protected serverUrl: string;
    protected constructor(serverName: string, clientId: string, apiKey: string, serverUrl: string);
    abstract fetchTopScores(userId: string): Promise<{}[]>;
}

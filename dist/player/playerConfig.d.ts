import { IOsuServer, OsuServer } from "../servers/osu.server";
export interface IPlayerConfig {
    playerId: string;
    server: IOsuServer;
    fetchScores(): Promise<{}[]>;
}
export declare class PlayerConfig implements IPlayerConfig {
    playerId: string;
    server: OsuServer;
    constructor(playerId: string, server: OsuServer);
    fetchScores(): Promise<{}[]>;
}

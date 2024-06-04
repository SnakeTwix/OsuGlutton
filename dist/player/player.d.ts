import { IPlayerConfig } from "./playerConfig";
export declare class Player {
    displayName: string;
    playerServers: IPlayerConfig[];
    constructor(displayName: string, playerServers: IPlayerConfig[]);
    fetchAllScores(): Promise<{}[]>;
}

import { OsuServer } from "./osu.server";
export declare class ServerBancho extends OsuServer {
    constructor();
    fetchTopScores(userId: string): Promise<{}[]>;
}

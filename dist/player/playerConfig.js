export class PlayerConfig {
    playerId;
    server;
    constructor(playerId, server) {
        this.playerId = playerId;
        this.server = server;
    }
    fetchScores() {
        return this.server.fetchTopScores(this.playerId);
    }
}

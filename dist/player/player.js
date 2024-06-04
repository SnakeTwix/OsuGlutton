export class Player {
    displayName;
    playerServers;
    // At least should have bancho
    // TODO: Implement a check for bancho id
    constructor(displayName, playerServers) {
        this.displayName = displayName;
        this.playerServers = playerServers;
    }
    async fetchAllScores() {
        const allScores = [];
        for (let playerServer of this.playerServers) {
            const serverScores = await playerServer.server.fetchTopScores(playerServer.playerId);
            allScores.push(...serverScores);
        }
        return allScores;
    }
}

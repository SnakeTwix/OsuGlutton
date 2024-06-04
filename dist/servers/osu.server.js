export class OsuServer {
    serverName;
    clientId;
    apiKey;
    serverUrl;
    constructor(serverName, clientId, apiKey, serverUrl) {
        this.serverName = serverName;
        this.clientId = clientId;
        this.apiKey = apiKey;
        this.serverUrl = serverUrl;
    }
}

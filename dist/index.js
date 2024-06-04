import { ServerBancho } from "./servers/bancho.server";
import { PlayerConfig } from "./player/playerConfig";
import { Player } from "./player/player";
const SupportedServers = {
    bancho: new ServerBancho(),
};
const snakeTwixServers = [
    new PlayerConfig("12392386", SupportedServers.bancho),
];
const camaraderieServers = [
    new PlayerConfig("9335177", SupportedServers.bancho),
];
const players = [
    new Player("SnakeTwix", snakeTwixServers),
    new Player("camaraderie", camaraderieServers),
];
players.forEach(async (player) => console.log(player.displayName, await player.fetchAllScores()));

import "dotenv/config";
import { ServerBancho } from "./servers/bancho.server";
import { IOsuServer } from "./servers/osu.server";
import { PlayerConfig } from "./player/playerConfig";
import { Player } from "./player/player";
import { ServerGatari } from "./servers/gatari.server";

const SupportedServers = {
  bancho: new ServerBancho(),
  gatari: new ServerGatari(),
} satisfies Record<string, IOsuServer>;

const snakeTwixServers: PlayerConfig[] = [
  new PlayerConfig("12392386", SupportedServers.bancho),
  new PlayerConfig("10400", SupportedServers.gatari),
];

const camaraderieServers: PlayerConfig[] = [
  new PlayerConfig("9335177", SupportedServers.bancho),
  new PlayerConfig("12197", SupportedServers.gatari),
];
const players = [
  new Player("SnakeTwix", snakeTwixServers),
  new Player("camaraderie", camaraderieServers),
];

players.forEach(async (player) =>
  console.log(player.displayName, await player.fetchAllScores()),
);

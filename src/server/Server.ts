import { Minefort } from '../Minefort';
import { ServerListServer } from './ServerResponse';

export class Server {
    client: Minefort;

    id: string;
    name: string;
    icon: {
        iconId: string;
        item: string;
        name: string;
        image: string;
    };
    userId: string;
    version: string;
    state: number;
    motd: string;
    onlinePlayers: number;
    maxPlayers: number;
    players: string[];
    constructor(client: Minefort, server: ServerListServer) {
        this.client = client;

        this.id = server.serverId;
        this.name = server.serverName;
        this.icon = server.serverIcon
        this.userId = server.userId;
        this.version = server.version;
        this.state = server.state;
        this.motd = server.messageOfTheDay;
        this.onlinePlayers = server.players.online;
        this.maxPlayers = server.players.max;
        this.players = server.players.list.map(player => player.uuid);
    }
}
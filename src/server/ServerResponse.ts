export interface ServerListResponse {
    status: 'OK';
    result: ServerListServer[];
}

export interface ServerListServer {
    serverId: string;
    serverName: string;
    serverIcon: {
        iconId: string;
        item: string;
        name: string;
        image: string;
    };
    userId: string;
    version: string;
    state: number;
    messageOfTheDay: string;
    players: {
        online: number;
        max: number;
        list: {
            uuid: string;
        }[];
    }
}
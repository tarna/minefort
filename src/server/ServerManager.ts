import { Minefort } from '../Minefort';
import { Server } from './Server';
import { ServerListResponse } from './ServerResponse';

export class ServerManager {
    client: Minefort;
    constructor(client: Minefort) {
        this.client = client;
    }

    async getOnlineServers({
        paginationSkip,
        limit,
        sortField,
        sortOrder
    }: { paginationSkip?: number, limit?: number, sortField?: string, sortOrder?: 'asc' | 'desc' } = {}) {
        return await this.client.request<ServerListResponse>('/servers/list', {
            method: 'POST',
            body: {
                pagination: {
                    skip: paginationSkip ?? 0,
                    limit: limit ?? 500
                },
                sort: {
                    field: sortField ?? 'players.online',
                    order: sortOrder ?? 'desc',
                }
            }
        }).then(res => res.result.map(server => new Server(this.client, server)));
    }
}
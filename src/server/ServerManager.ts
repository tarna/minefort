import { Minefort } from '../Minefort';
import { Server } from './Server';
import { ServerListResponse } from './ServerResponse';

/**
 * The Minefort Server Manager
 */
export class ServerManager {
    client: Minefort;
    constructor(client: Minefort) {
        this.client = client;
    }

    /**
     * Get a list of online servers
     * @param paginationSkip the number of servers to skip
     * @param limit the number of servers to return
     * @param sortField the field to sort by
     * @param sortOrder the order to sort by 
     * @returns {Promise<Server[]>}
     */
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
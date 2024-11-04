import { BlogManager } from './blog/BlogManager';
import { MINEFORT_API_BASE } from './constants';
import { ServerManager } from './server/ServerManager';

export class Minefort {
    servers: ServerManager;
    blog: BlogManager;
    constructor() {
        this.servers = new ServerManager(this);
        this.blog = new BlogManager(this);
    }

    async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
        try {
            return await fetch(`${MINEFORT_API_BASE}${path}`, {
                method: options.method || 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: options.body ? JSON.stringify(options.body) : undefined,
            }).then(res => res.json() as Promise<T>);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}

interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
}
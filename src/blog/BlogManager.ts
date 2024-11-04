import { Minefort } from '../Minefort';
import { Article } from './Article';
import { BlogResponse } from './BlogResponse';

export class BlogManager {
    client: Minefort;
    constructor(client: Minefort) {
        this.client = client;
    }

    async getArticles() {
        return await this.client.request<BlogResponse>('/blog/articles', {
            method: 'GET',
        }).then(res => res.result.map(article => new Article(this.client, article)));
    }

    async getFeaturedArticles() {
        return await this.client.request<BlogResponse>('/blog/featured', {
            method: 'GET',
        }).then(res => res.result.map(article => new Article(this.client, article)));
    }
}
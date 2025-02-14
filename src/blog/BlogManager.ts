import { Minefort } from '../Minefort';
import { Article } from './Article';
import { BlogListResponse, BlogResponse } from './BlogResponse';

export class BlogManager {
    client: Minefort;
    constructor(client: Minefort) {
        this.client = client;
    }

    async getArticle(slug: string) {
        return await this.client.request<BlogResponse>(`/blog/articles/${slug}`, {
            method: 'GET',
        }).then(res => new Article(this.client, res.result));
    }

    async getArticles() {
        return await this.client.request<BlogListResponse>('/blog/articles', {
            method: 'GET',
        }).then(res => res.result.map(article => new Article(this.client, article)));
    }

    async getFeaturedArticles() {
        return await this.client.request<BlogListResponse>('/blog/featured', {
            method: 'GET',
        }).then(res => res.result.map(article => new Article(this.client, article)));
    }
}
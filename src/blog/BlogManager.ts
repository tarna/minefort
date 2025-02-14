import { Minefort } from '../Minefort';
import { Article } from './Article';
import { BlogListResponse, BlogResponse } from './BlogResponse';

/**
 * The Minefort Blog Manager
 */
export class BlogManager {
    client: Minefort;
    constructor(client: Minefort) {
        this.client = client;
    }

    /**
     * Get an article by its slug
     * @param slug the slug of the article
     * @returns {Promise<Article>}
     * @example const article = await minefort.blog.getArticle('how-to-make-an-anvil-in-minecraft);
     */
    async getArticle(slug: string) {
        return await this.client.request<BlogResponse>(`/blog/articles/${slug}`, {
            method: 'GET',
        }).then(res => new Article(this.client, res.result));
    }

    /**
     * Get a list of articles
     * @returns {Promise<Article[]>}
     */
    async getArticles() {
        return await this.client.request<BlogListResponse>('/blog/articles', {
            method: 'GET',
        }).then(res => res.result.map(article => new Article(this.client, article)));
    }

    /**
     * Get a list of featured articles
     * @returns {Promise<Article[]>}
     */
    async getFeaturedArticles() {
        return await this.client.request<BlogListResponse>('/blog/featured', {
            method: 'GET',
        }).then(res => res.result.map(article => new Article(this.client, article)));
    }
}
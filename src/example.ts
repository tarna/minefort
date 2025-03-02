import { Minefort } from './Minefort';

(async function () {
    const minefort = new Minefort();
    const servers = await minefort.servers.getOnlineServers({
        limit: 10,
    });
    console.log(servers);

    const articles = await minefort.blog.getArticles();
    console.log(articles.reduce((acc, article) => acc + article.readingTime, 0));

    const article = await minefort.blog.getArticle(articles[0].slug);
    console.log(article.title);
})();
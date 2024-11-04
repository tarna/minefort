# Minefort
A TypeScript wrapper for the [Minefort](https://minefort.com) HTTP API

## Installation
Install minefort with [NPM](https://npmjs.com)

```bash
  npm install minefort
```

## Features
- Get a list of online Minefort servers
- Get a list of blog articles

## Basic Usage
```ts
const minefort = new Minefort();

async function main() {
    const minefort = new Minefort();
    const servers = await minefort.servers.getOnlineServers({
        limit: 10,
    });
    console.log(servers);

    const articles = await minefort.blog.getArticles();
    console.log(articles.reduce((acc, article) => acc + article.readingTime, 0));
}

main();
```

For more examples, visit [example.ts](https://github.com/tarna/minefort/blob/master/src/example.ts).

## Contributing
Contributions are always welcome!

See `contributing.md` for ways to get started.

## License
[MIT](https://choosealicense.com/licenses/mit)

## Contributors
- [@tarna](https://www.github.com/tarna)
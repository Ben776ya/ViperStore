import Parser, { Item, Output } from 'rss-parser';
import { newsCard } from '../lib/interface';

const parser = new Parser();

async function getAndDisplayRSSFeed(url: string): Promise<void> {
    try {
        const feed: Output<{ [key: string]: any }> = await parser.parseURL(url);
        const news: newsCard[] = [];

        const temp = feed.title;
        let test = feed.items;

        /*console.log('Feed Title:', temp);

        console.log('Feed Title:', feed.title);
        console.log('Feed Link:', feed.link);
        console.log('Feed Description:', feed.description);*/

        console.log('Items:');
        feed.items.forEach((item: Item, index: number) => {
            console.log(`Item ${index + 1}:`);
            console.log('Title:', item.title);
            console.log('Link:', item.link);
            console.log('----------------------');
        });
    } catch (err) {
        console.error('Error fetching or parsing the RSS feed:', err);
    }
}

// Example usage: Provide the URL of the RSS feed you want to fetch
const rssFeedUrl: string = 'https://rss.app/feeds/cKUZfVwLQtxHmEG9.xml';
export default getAndDisplayRSSFeed(rssFeedUrl);
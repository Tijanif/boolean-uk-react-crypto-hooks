import UseGetNewsList from "../Hooks/UseGetNewsList";
import NewsCard from "./NewsCard";

export default function NewsFeed() { 
 const [newsList] = UseGetNewsList()
  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}

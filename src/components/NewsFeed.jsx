import { useEffect, useState } from "react";
import { STATUS_UPDATES } from "../constants";
import NewsCard from "./NewsCard";

export default function NewsFeed() {
  const [newsList, setNewsList] = useState([]);

  // You can turn this into a custom hook////////////////////
  useEffect(
    () =>
      fetch(STATUS_UPDATES)
        .then((resp) => resp.json())
        .then(({ status_updates }) => setNewsList(status_updates)),
    [setNewsList]
  );
  ///////////////////////////////////////////////////////////

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

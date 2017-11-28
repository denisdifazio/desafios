import fetch from 'node-fetch';

function parseData(threads) {
  if (!threads) {
    return {};
  }

  const { data } = threads;
  const { children } = data;

  return children
    .map(({ data }) => {
      const { score, subreddit, title, permalink, url } = data;
      return { score, subreddit, title, permalink: `https://www.reddit.com${permalink}`, url };
    })
    .filter(({ score }) => score >= 5000);
}

export default function fetchTopThreads(subreddits = [], time = 'day', limit = 10) {
  return subreddits.map(subreddit =>
    fetch(`https://www.reddit.com/r/${subreddit}/top/.json?sort=top&limit=${limit}&t=${time}`)
      .then(res => res.json())
      .then(threads => parseData(threads)),
  );
}

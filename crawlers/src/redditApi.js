import fetch from 'node-fetch';

function parseData(subreddit, threads) {
  if (!threads) {
    return { subreddit, list: [] };
  }

  const { data } = threads;

  if (!data) {
    return { subreddit, list: [] };
  }

  const { children } = data;

  if (!children) {
    return { subreddit, list: [] };
  }

  const list = children
    .map(({ data }) => {
      const { score, subreddit, title, permalink, url } = data;
      return { score, subreddit, title, permalink: `https://www.reddit.com${permalink}`, url };
    })
    .filter(({ score }) => score >= 5000);

  return { subreddit, list };
}

export default function fetchTopThreads(subreddits = [], time = 'day', limit = 10) {
  return subreddits.map(subreddit =>
    fetch(`https://www.reddit.com/r/${subreddit}/top/.json?sort=top&limit=${limit}&t=${time}`)
      .then(res => res.json())
      .then(threads => parseData(subreddit, threads)),
  );
}

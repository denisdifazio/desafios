import fetchTopThreads from './redditApi';

describe('fetchTopThreads', () => {
  it('handles empty input', () => {
    expect(fetchTopThreads()).toEqual([]);
  });
});

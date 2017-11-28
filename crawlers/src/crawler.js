import fetchTopThreads from './redditApi';
import Telegraf from 'telegraf';
import Extra from 'telegraf/extra';
import Markup from 'telegraf/markup';

const bot = new Telegraf('481447498:AAG3CTQd_9CaSTIhi5L0K8VT45trd1UaUHQ');

bot.start(ctx => {
  console.log('started:', ctx.from.id);
  return ctx.reply('Welcome to Reddit Crawler!');
});

bot.command('/nadaprafazer', ctx => {
  const { text } = ctx.message;
  const subreddits = text.split(' ')[1];

  subreddits != undefined
    ? fetchTopThreads(subreddits.split(';')).map(promise =>
        promise.then(data =>
          data.map(thread => {
            const { score, subreddit, title, permalink, url } = thread;
            const text = `*Score*: ${score}
*Subreddit*: ${subreddit}
*Title*: ${title}
*Reddit Comments*: [${title}](${permalink})
*URL*: ${url}
----------------------------`;

            console.log(text);
            ctx.reply(text, Extra.webPreview(false).markdown());
          }),
        ),
      )
    : ctx.reply('Please, insert at least one subreddit e.g "/nadaprafazer brasil"');
});
bot.startPolling();

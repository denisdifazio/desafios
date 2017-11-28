# Desafio 2: Crawlers

Parte do trabalho na IDwall inclui desenvolver _crawlers/scrapers_ para coletar
dados de websites. Como nós nos divertimos trabalhando, às vezes trabalhamos
para nos divertir!

O Reddit é quase como um fórum com milhares de categorias diferentes. Com a sua
conta, você pode navegar por assuntos técnicos, ver fotos de gatinhos, discutir
questões de filosofia, aprender alguns life hacks e ficar por dentro das
notícias do mundo todo!

Subreddits são como fóruns dentro do Reddit e as postagens são chamadas
_threads_.

Para quem gosta de gatos, há o subreddit
["/r/cats"](https://www.reddit.com/r/cats) com threads contendo fotos de gatos
fofinhos. Para _threads_ sobre o Brasil, vale a pena visitar
["/r/brazil"](https://www.reddit.com/r/brazil) ou ainda
["/r/worldnews"](https://www.reddit.com/r/worldnews/). Um dos maiores subreddits
é o "/r/AskReddit".

Cada _thread_ possui uma pontuação que, simplificando, aumenta com "up votes"
(tipo um like) e é reduzida com "down votes".

Sua missão é encontrar e listar as _threads_ que estão bombando no Reddit
naquele momento! Consideramos como bombando _threads_ com 5000 pontos ou mais.

## Informações técnicas

* Linguagem
  * Javascript (ES6+ com Babel)
* Environment
  * NodeJS
* Test Framework
  * Jest

## Instalação

Com NodeJS instalado, abrir prompt de comando no diretório do repositório e
inserir o comando:

* `npm install`

## Utilização

Para executar a aplicação basta utilizar o comando `npm start` e para executar
os testes `npm test`. Após iniciada a aplicação, para se comunicar com o bot o
usuário deve procurar pelo mesmo no Telegram através do username
`@redditcrawlerbot`. Após se conectar em um chat com o robô, o usuário pode se
comunicar usando o comando `/nadaprafazer [lista]`, por exemplo: `/nadaprafazer
brasil;pics;askreddit`.

Obs: todos os comandos acima citados podem ser utilizados com `yarn`

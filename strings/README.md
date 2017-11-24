# Desafio 1: Strings

## Introdução

Após ler o coding style do kernel Linux, você descobre a mágica que é ter linhas
de código com no máximo 80 caracteres cada uma.

Assim, você decide que de hoje em diante seus e-mails enviados também seguirão
um padrão parecido e resolve desenvolver um plugin para te ajudar com isso.
Contudo, seu plugin aceitará no máximo 40 caracteres por linha.

Implemente uma função que receba:

1. um texto qualquer e
2. um limite de comprimento e seja capaz de gerar os outputs dos desafios
   abaixo.

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
os testes `npm test`. Caso deseja alterar o comprimento máximo da linha, basta
alterar o valor da variável lineLength dentro do arquivo `index.js`.

Obs: todos os comandos acima citados podem ser utilizados com `yarn`

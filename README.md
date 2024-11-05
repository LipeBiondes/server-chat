# server-chat

Primeira versão do servidor para o aplicativo de chat

## Sobre o Projeto

Este projeto é um servidor de chat simples onde um cliente pode se conectar e enviar mensagens. O servidor então retransmite essas mensagens para todos os clientes conectados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **WebSocket (ws)**: Biblioteca para implementar WebSockets em Node.js.
- **dotenv**: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.

## Como Funciona

1. O cliente se conecta ao servidor via WebSocket.
2. Quando o cliente envia uma mensagem, o servidor recebe essa mensagem.
3. O servidor então envia a mensagem de volta para todos os clientes conectados.

## Código de Exemplo

```javascript
require('dotenv').config()
const { WebSocketServer } = require('ws')

const PORT = process.env.PORT || 8080

const wss = new WebSocketServer({ port: PORT })

wss.on('connection', ws => {
  ws.on('error', error => console.error(error))

  ws.on('message', data => {
    wss.clients.forEach(client => {
      client.send(data.toString())
    })
  })

  console.log('client connected')
})
```

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Crie um arquivo `.env` na raiz do projeto e defina a variável `PORT`.
4. Execute o servidor com `node server.js`.

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

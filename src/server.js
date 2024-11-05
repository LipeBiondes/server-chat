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


const express = require('express')
const app1 = express()

const http = require('http')
const server = http.createServer(app1)

const{
    Server
}= require('socket.io')

const io = new Server (server)

app1.get('/', (req, res) =>  {
    res.sendFile(__dirname+ '/index.html')
})

io.on('connection', (socket) => {
    console.log('user connected !')
    socket.on('on-chat', data => {
        io.emit('user-chat', data)
    })
}
)

server.listen(3000, () => {
    console.log('listening on port 3000')
})


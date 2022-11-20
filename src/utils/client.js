import * as io from 'socket.io-client';

const SERVER = 'http://localhost:5000';

export default class SocketClient {
    socketClient;
    username;

    constructor(username) {
        this.username = username;
        this.socketClient = io.connect(SERVER);
    }

    joinRoom(room) {
        console.log("attempting to join room")
        this.socketClient.emit("join", {
            "username": this.username,
            "room": room
        })
    }

    sendMessage(username, room, message) {
        console.log("attempting to send message")
        this.socketClient.emit("message", {
            "username": username,
            "room": room,
            "message": message
        });
    }

    getMessages() {
        this.socketClient.on('chat', (message) => {
            console.log(`Message received: ${message}`)
        })
    }
}
let express = require('express');
let app = express();
const path = require("path");
const port = process.env.PORT || 8000;

var http = require("http").Server(app);
var io = require("socket.io")(http, {
    cors: {
        origin: "https://mohit-kumar123.github.io", // Your frontend URL
        methods: ["GET", "POST"]
    }
});

const activeusers = {};

io.on("connection", (socket) => {
    socket.on("new_user_joined", (username) => {
        console.log("new user", username);
        activeusers[socket.id] = username;
        socket.broadcast.emit("user-joined", username);

        socket.on("disconnect", () => {
            console.log("user-left", username);
            socket.broadcast.emit("user-left", username);
        });
    });

    socket.on("send", (message) => {
        socket.broadcast.emit("recieve", {
            message: message,
            username: activeusers[socket.id]
        });
    });
});

http.listen(port, function () {
    console.log(`Server is listening at port ${port}`);
});

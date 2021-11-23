const express = require('express');
const app = express();
const port = 3000 || process.env.PORT
const cors = require("cors");
const http = require("http");
const {
    connect
} = require('http');

var server = http.createServer(app);
var io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});
app.use(express.json());
app.use(cors());
io.on("Connection", (connect) => {
    console.log('connected');

});
server.listen(port, (req,res) => {
    console.log('sercer started');
    
    
})
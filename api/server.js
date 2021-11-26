const express = require("express");
const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is now listening on ${PORT}`);
})

module.exports = server;
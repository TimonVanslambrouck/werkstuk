const express = require("express");
const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})

module.exports = server;
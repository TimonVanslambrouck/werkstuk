const SERVER = require('./index');
const PORT = 3000 || process.env.PORT;

SERVER.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
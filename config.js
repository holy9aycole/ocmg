const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 7000;

const PUBLIC_PATH = __dirname + "/public";

module.exports = { HOST, PORT, PUBLIC_PATH };

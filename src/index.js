const express = require('express');
const server = express();
require('dotenv').config('./src');

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log(process.env.MESSAGE);
});

server.use('*', (req, res) => {
	res.send('<h1>Hello, Heroku!</h1>');
});

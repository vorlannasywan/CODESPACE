const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorhandler = require('./middleware/errorhandler');
const gameroute = require('./route/gameroute');
const publisherroute = require('./route/publisherroute');

app.use(express.json());
app.use(logger);

app.use('/games', gameroute);
app.use('/publishers', publisherroute);

app.use(errorhandler);

app.listen(3000, () => console.log('Server is running on port http://localhost:3000'));

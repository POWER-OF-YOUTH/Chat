const path = require('path');
const express = require('express');
const wsServer = require('./wsServer/main');

const PORT = 80;
const indexHTML = path.resolve(__dirname,'client/public/index.html');
const app = express();

app.use('/', express.static('client/public'));
app.get('/*', (req, res) => res.sendFile(indexHTML));

app.listen(PORT, () => console.info('App is started:', PORT));
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('build/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/', 'index.html'));
});

app.listen(process.env.PORT || 3000);
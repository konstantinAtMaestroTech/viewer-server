const express = require('express');
const { PORT } = require('./config.js');
const path = require('path');

let app = express();
app.use(express.static('wwwroot'));
app.use(require('./routes/auth.js'));
app.use(require('./routes/models.js'));

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'wwwroot', 'edit.html'));
});

app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });

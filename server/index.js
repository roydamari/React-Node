const express = require("express");
const app = express();
const path = require('path')
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
const fs = require('fs').promises;

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/api/v1/records', async (req, res) => {
    const content = await fs.readFile('./records.json');
    const json = JSON.parse(content);
    res.send(json);
});

app.post('/api/v1/records', async (req, res) => {
    if (req.body) {
        const content = await fs.readFile('./records.json');
        const json = JSON.parse(content);
        req.body.id = json.length;
        json.push(req.body);
        await fs.writeFile('./records.json', JSON.stringify(json));
        res.send('added successfully');
    }
    res.send('something went wrong');
});



app.listen(4000);
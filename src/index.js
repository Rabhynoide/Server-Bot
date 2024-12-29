const express = require('express');
const { formatDate, generateId } = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon projet Node.js!');
});

app.get('/date', (req, res) => {
    const currentDate = formatDate(new Date());
    res.send(`Date actuelle : ${currentDate}`);
});

app.get('/generate-id', (req, res) => {
    const newId = generateId();
    res.send(`Nouvel ID généré : ${newId}`);
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
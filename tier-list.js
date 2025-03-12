const express = require('express');
const cors = requrie('cors');

const PORT = 8082;
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/brawler', (req, res) => {
    res.status(200).send("/brawler_tier_list.png");
});

app.get('/gear', (req, res) => {
    res.status(200).send("/gear_tier_list.png");
});

app.listen(PORT, () => {
    console.log(`Data retrieval microservice listening on port ${PORT}...`);
});

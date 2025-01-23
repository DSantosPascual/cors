const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/characters/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const characters = response.data.results;

        if (characters.length === 0) {
            return res.status(404).json({ message: 'Character not found' });
        }

        res.json(characters[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
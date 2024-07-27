const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie`, {
            params: {
                api_key: process.env.API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const BASE_URL = 'https://api.github.com/orgs/takenet';

app.get('/', async (_req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/repos?per_page=100&sort=created&direction=asc`);

    const reposFilter = (lang, limit) => {
      const repos = data
        .filter(({ language }) => language === lang)
        .slice(0, limit)
        .map((repo) => ({
          title: repo.name,
          subtitle: repo.description,
          image: repo.owner.avatar_url,
        }));
      return repos;
    };

    const reposFilteredByLanguage = reposFilter('C#', 5);

    res.status(200).json({ ...reposFilteredByLanguage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;

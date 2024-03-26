const express = require('express');
const router = express.Router();
const quoteModel = require('../models/quoteModel');

// Search page route
router.get('/', async (req, res) => {
    try {
        // Render search page
        res.render('search');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Favorites page route
router.get('/favorites', async (req, res) => {
    try {
        // Get all favorites from the database
        const favorites = await quoteModel.getAllFavorites();
        // Render favorites page with favorites data
        res.render('favorites', { favorites });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Save favorite quote route
router.post('/save-favorite', async (req, res) => {
    try {
        // Extract quote information from request body
        const { quote, author } = req.body;
        // Save favorite quote to the database
        await quoteModel.saveFavorite(quote, author);
        // Redirect back to search page
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

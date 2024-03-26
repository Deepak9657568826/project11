const dbConfig = require('../config/dbConfig');

// Model to interact with the database
const quoteModel = {
    // Function to save favorite quote to the database
    saveFavorite: async (quote, author) => {
        
        const db = dbConfig.getPool();
        await db.query('INSERT INTO favorites (quote, author) VALUES (?, ?)', [quote, author]);
    },

    // Function to retrieve all favorites from the database
    getAllFavorites: async () => {
        const db = dbConfig.getPool();
        const [rows] = await db.query('SELECT * FROM favorites');
        return rows;
    }
};

module.exports = quoteModel;

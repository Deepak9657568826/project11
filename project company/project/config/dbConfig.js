const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
    host: 'localhost',          // MySQL host (default: 'localhost')
    user: 'root',      // MySQL username
    password: 'Deepak',  // MySQL password
    database: 'quotes'          // MySQL database name
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Export the connection pool
module.exports = pool;

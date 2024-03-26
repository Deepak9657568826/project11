const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig');
const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Connect to the database
dbConfig.connect();

// Routes
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

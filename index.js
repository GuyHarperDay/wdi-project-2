const express = require('express');
const app = express();
const { port, dbURI } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./config/routes');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

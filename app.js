const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouterRouter = require('./routes/categories');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const PORT = 3000;
const app = express();


connectToDatabase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  usersRouter, 
  gamesRouter, 
  categoriesRouterRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
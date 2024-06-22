const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');

const envs = require('./util/config');
const {superAdmin} = require('./seeders/admin');
superAdmin();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const errorController = require('./controllers/error');
const dbconnection = require('./util/dbMongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors({
  origin: process.env.MONGODB_URL,
  credentials: true,
}));
app.use(cookieParser());
app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || envs.PORT;

app.use(userRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.getError404);

dbconnection().then(() => {
  app.listen(port, () => {
      console.log(`Server running at port: ${port}/`);
  });
  module.exports = { app, servidor };
}).catch((error) => {
  console.error("Error starting the server: ", error.message);
});

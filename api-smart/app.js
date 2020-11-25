const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { requestLimit } = require('./requestLimit');
const itemsRouter = require('./routes/items');
const { PORT, DATABASE } = require('./globalconst');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { ErrorMiddleware } = require('./middlewares/error');

const app = express();

const corsOptions = {
  origin:["http://localhost:8080", "http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};

app.use(cors(corsOptions));



app.use(helmet());
app.use(bodyParser.json());
app.use(requestLimit);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(requestLogger);

app.use('/api/item', itemsRouter);
app.use(errorLogger);
app.use(errors());
app.use(ErrorMiddleware);

app.listen(PORT);

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import collections_routes from './routes/collections.js';
import courses_routes from './routes/courses.js';
import users_routes from './routes/users.js';

app.use('/api/courses', courses_routes);
app.use('/api/collections', collections_routes);
app.use('/api/users', users_routes);

export default app;
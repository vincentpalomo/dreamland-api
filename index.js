import express from 'express';
import bodyParser from 'body-parser';
import dataRoutes from './routes/data.js';
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();
const indexMiddleware = express.static(path.join(__dirname, 'public'));
app.use(indexMiddleware);

app.use(morgan('dev'));

app.use(bodyParser.json());

app.get('/data', dataRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Dreamland API</h1>');
});

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`));

import express from 'express';
import bodyParser from 'body-parser';
import dataRoutes from './routes/data.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/data', dataRoutes);
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Dreamland API</h1>');
});

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`));

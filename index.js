import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
// app.use('/users', usersRoutes)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Dreamland API</h1>');
});

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`));

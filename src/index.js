import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! from Express.js deployed with Docker');
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on port: ${PORT}`);
});
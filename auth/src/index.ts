import express from 'express';

const app = express();

const random = 'hello';
const random2 = 'hello';
app.get('*', (req, res) => {
  res.send({});
});

app.listen(3000, () => {
  console.log('Listeneing on port 3000');
});

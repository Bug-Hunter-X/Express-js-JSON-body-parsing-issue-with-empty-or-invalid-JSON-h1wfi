const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data here
  console.log(data);
  res.status(200).send('OK');
});
app.listen(3000, () => console.log('Server is listening on port 3000'));
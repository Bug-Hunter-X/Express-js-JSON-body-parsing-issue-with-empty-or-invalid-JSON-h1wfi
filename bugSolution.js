const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty');
  }
  try {
    const data = req.body; 
    // Process the data here
    console.log(data);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => console.log('Server is listening on port 3000'));
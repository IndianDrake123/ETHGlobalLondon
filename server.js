const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory which is sibling to "Static"
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

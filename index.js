const express = require('express');
const { resolve } = require('path');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production')
  throw Error(`NODE_ENV must be 'production'. Use 'yarn dev' for development.`);

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'build', 'index.html'));
});

app.app.listen(port, () => console.log(`Serving on port: ${port}`));

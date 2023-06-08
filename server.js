const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/client'));

const route = require('./routes');

// Router init
route(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/list.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

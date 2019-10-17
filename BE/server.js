const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');
const app = express()
const port = 8080

const { formatMoney } = require('./helpers/formatMoney');

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Working !!'))

app.post('/format', (req, res) => {
  const { value } = req.body;
  const ret = formatMoney(value);
  console.log('TCL: ret', ret);
  return res.send({ formatted: ret.toString() });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
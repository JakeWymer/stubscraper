const app = require('express')();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/Entry');
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

require('./routes/entryRoutes')(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('ROOT ROUTE');
});
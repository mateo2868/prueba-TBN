const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", express.static(path.join(__dirname, "./public")));

app.use(require('./routes'));

// finally, let's start our server...
var server = app.listen(3000, () => {
   console.log('Listening on port ' + server.address().port);
});
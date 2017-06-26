const express = require('express');
import {healthCheck}  from './controllers/healthcheck';
const app = express();

var router = express.Router();

router.get('/', healthCheck);

app.use('/', router);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
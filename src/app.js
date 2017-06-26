const express = require('express');
import {healthCheck}  from './controllers/healthcheck';
const app = express();

var router = express.Router();

router.get('/', healthCheck);

app.use('/', router);

export default app;
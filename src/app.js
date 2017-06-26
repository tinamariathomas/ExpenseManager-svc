import { healthCheck } from './controllers/healthcheck';

const express = require('express');

const app = express();

const router = express.Router();

router.get('/', healthCheck);

app.use('/', router);

export default app;

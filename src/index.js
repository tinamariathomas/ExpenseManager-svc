import app from './app';
import {logger} from './lib/logger';


app.listen(3000, () => {
  logger.info('App Started on port 3000');
});

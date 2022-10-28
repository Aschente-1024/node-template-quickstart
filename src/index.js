import app from './app.js';
import { CONFIG } from './config/index.js';
import logger from './logger/index.js';

app.listen(CONFIG.APP_PORT, () => {
    logger.info('Server started listning on port ' + CONFIG.APP_PORT);
});

/* @title: <<nodejs-logger>> program written in Node.js.
 * @desc: A simple program starter using logger module.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const pino = require('pino');
const logger = pino({
    prettyPrint: {
        levelFirst: true
    }
});

logger.info('Logging in info mode');
logger.info('Logging in info mode %s', '!!!');
logger.info('Logging in info mode %d', 89);
logger.error('Logging in error mode');
logger.debug('Logging in debug mode');

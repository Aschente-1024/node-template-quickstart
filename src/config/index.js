const NODE_ENV = process.env.NODE_ENV || 'dev';

import { resolve } from 'path';

import { config } from 'dotenv';
config({ path: `${resolve()}/config/.env.${NODE_ENV}` });
console.log('config called');

export const CONFIG = {
    APP_PORT: process.env.PORT,

    DATABASE_DBNAME: process.env.DATABASE_DBNAME,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT,
};

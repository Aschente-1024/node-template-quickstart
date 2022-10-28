import { Sequelize } from 'sequelize';
import { CONFIG } from '../config/index.js';

let sequelize = new Sequelize(
    CONFIG.DATABASE_DBNAME,
    CONFIG.DATABASE_USERNAME,
    CONFIG.DATABASE_PASSWORD,
    {
        host: CONFIG.DATABASE_HOST,
        dialect: CONFIG.DATABASE_DIALECT,
    }
);

export default sequelize;

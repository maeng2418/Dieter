import { databaseConfig } from '../../config/constants';

const connection = Object.assign({ dialect: 'mysql', max: 5, min: 0, idle: 10000 }, databaseConfig);
export { connection };

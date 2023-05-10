// connect db postgresql

import { Pool } from 'pg';
import { config } from '../config/config';

const pool = new Pool({
    port: config.db_port,
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_database
});


pool.on('error',
    (err: Error) => {
        console.error('Unexpected error on idle client', err);
        process.exit(-1);
    }
);

export default pool;

import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: Number(process.env.PORT),
    db_port: Number(process.env.PGPORT),
    db_host: process.env.PGHOST,
    db_user: process.env.PGUSER,
    db_password: process.env.PGPASSWORD,
    db_database: process.env.PGDATABASE,
    pepper: process.env.PEPPER,
    jwt_secret: process.env.JWT_SECRET,
    salt_round: process.env.SALTROUND
}

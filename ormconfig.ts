/* eslint-disable prettier/prettier */
import { env } from './env';
const config: any = {
  type: 'mssql',
  host: env.DATABASE_HOST,
  port: parseInt(env.DATABASE_PORT),
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: env.DATABASE_SYNCHRONIZE === 'true',
  extra: {
    trustServerCertificate: true,
  },
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export default config;

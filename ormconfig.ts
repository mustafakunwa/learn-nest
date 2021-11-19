/* eslint-disable prettier/prettier */

const config: any = {
  type: 'mssql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  },
};

export default config;

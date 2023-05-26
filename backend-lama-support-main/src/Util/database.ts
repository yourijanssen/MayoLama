import * as mysql2 from 'mysql2';

export const pool = mysql2.createPool({
  host: 'localhost',
  user: 'lamaUser',
  password: 'MayoLama2022#!',
  database: 'MayoLama',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

require('dotenv/config');

module.exports = {
  development: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },

}




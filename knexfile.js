// knexfile.js
const dotenv = require("dotenv");

// Load environment variables only for non-production environments
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const config = {
  development: {
    client: "pg", // PostgreSQL
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 5432,
    },
    migrations: {
      directory: "./migrations", // Directory for migrations
    },
    seeds: {
      directory: "./seeds", // Directory for seeds
    },
  },
  production: {
    client: "pg", // PostgreSQL
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 5432,
      ssl: { rejectUnauthorized: false }, // Use SSL for production databases
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

// Set the environment based on the NODE_ENV variable (defaults to development)
const environment = process.env.NODE_ENV || "development";
const knexConfig = config[environment];

module.exports = knexConfig;

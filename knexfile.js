require("dotenv").config();
// This loads environment variables from a `.env` file into `process.env`.
// These environment variables will be used to configure the database connection
// (e.g., DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT).

const knex = require("knex");
// This imports the Knex library, which is used to interact with the database.

const config = {
  development: {
    client: "pg",
    // Specifies that PostgreSQL is the database client ('pg' stands for PostgreSQL).

    connection: {
      host: process.env.DB_HOST,
      // The host where the PostgreSQL database is running, taken from the `.env` file.

      user: process.env.DB_USER,
      // The PostgreSQL database username, taken from the `.env` file.

      password: process.env.DB_PASSWORD,
      // The PostgreSQL database password, taken from the `.env` file.

      database: process.env.DB_NAME,
      // The name of the PostgreSQL database to connect to, taken from the `.env` file.

      port: process.env.DB_PORT || 5432,
      // The port on which the PostgreSQL server is running. Defaults to 5432 if not specified in the `.env` file.
    },

    migrations: {
      directory: "./migrations",
      // Specifies the directory where Knex migration files are stored.
      // Migrations allow you to create and update database schema over time.
    },

    seeds: {
      directory: "./seeds",
      // Specifies the directory where Knex seed files are stored.
      // Seeds allow you to insert initial data into the database, often for testing or development.
    },
  },
};

const environment = process.env.NODE_ENV || "development";
// Determines the environment in which the application is running (e.g., 'development', 'production').
// If no environment is set, it defaults to 'development'.

const db = knex(config[environment]);
// Initializes Knex with the selected environment's configuration.
// This connects Knex to the PostgreSQL database using the specified environment's settings.

module.exports = db;
// Exports the initialized Knex instance so it can be imported and used throughout the project to query the database.

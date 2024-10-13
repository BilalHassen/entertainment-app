require("dotenv").config(); // This loads environment variables from a .env file using the dotenv package.
// The environment variables (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, etc.) will be used to configure the database connection.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * This sets up Knex.js configuration for different environments (development, staging, production).
 * Knex uses these configurations to connect to the database and manage migrations and seeds.
 */
module.exports = {
  // Configuration for development environment
  development: {
    client: "pg", // Specifies that PostgreSQL is the database client (pg stands for PostgreSQL)

    // Database connection settings for development environment
    connection: {
      host: process.env.DB_HOST, // The database host (e.g., Supabase or localhost), pulled from the .env file
      user: process.env.DB_USER, // The database user, pulled from the .env file
      password: process.env.DB_PASSWORD, // The database password, pulled from the .env file
      database: process.env.DB_NAME, // The database name, pulled from the .env file
      port: process.env.DB_PORT || 5432, // The port on which PostgreSQL is running, defaults to 5432 if not provided in .env
    },

    // Migration settings for development
    migrations: {
      directory: "./api/migrations", // Directory where migration files are stored (e.g., ./migrations). These are SQL instructions to create, alter, or delete tables.
    },

    // Seed settings for development (optional)
    seeds: {
      directory: "./api/seed-data", // Directory where seed files are stored. Seeds allow you to insert initial data into the database for development or testing.
    },
  },

  // Configuration for staging environment (used for testing before going live)
  staging: {
    client: "pg", // Specifies that PostgreSQL is the database client

    // Database connection settings for staging environment
    connection: {
      host: process.env.DB_HOST, // Staging database host (can be the same or different from development)
      user: process.env.DB_USER, // Staging database user
      password: process.env.DB_PASSWORD, // Staging database password
      database: process.env.DB_NAME, // Staging database name
      port: process.env.DB_PORT || 5432, // Staging PostgreSQL port, defaults to 5432 if not provided
    },

    // Connection pooling settings (to control the number of database connections in staging)
    pool: {
      min: 2, // Minimum number of database connections
      max: 10, // Maximum number of database connections
    },

    // Migration settings for staging environment
    migrations: {
      tableName: "knex_migrations", // A table in the database that tracks migration versions (to prevent running the same migration multiple times)
    },
  },

  // Configuration for production environment (used when the app is live)
  production: {
    client: "pg", // Specifies that PostgreSQL is the database client

    // Database connection settings for production environment
    connection: {
      host: process.env.DB_HOST, // Production database host
      user: process.env.DB_USER, // Production database user
      password: process.env.DB_PASSWORD, // Production database password
      database: process.env.DB_NAME, // Production database name
      port: process.env.DB_PORT || 5432, // PostgreSQL port for production, defaults to 5432 if not provided
    },

    // Connection pooling settings for production (to handle larger numbers of connections)
    pool: {
      min: 2, // Minimum number of database connections
      max: 10, // Maximum number of database connections to allow at once (scales based on traffic)
    },

    // Migration settings for production environment
    migrations: {
      tableName: "knex_migrations", // A table in the database that tracks the current state of migrations in production
    },
  },
};

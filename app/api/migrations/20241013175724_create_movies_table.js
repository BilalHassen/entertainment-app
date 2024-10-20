exports.up = function (knex) {
  return knex.schema.createTable("movies", function (table) {
    table.increments("id"); // Auto-incrementing primary key
    table.string("title").notNullable(); // Movie title
    table.integer("year").notNullable(); // Release year
    table.string("category").notNullable(); // Movie category (e.g., 'Movie', 'TV Series')
    table.string("rating").notNullable(); // Rating (e.g., 'PG', '18+')
    table.boolean("is_bookmarked").defaultTo(false); // Boolean flag for if the movie is bookmarked
    table.boolean("is_trending").defaultTo(false); // Boolean flag for if the movie is trending
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
